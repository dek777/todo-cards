<template>
  <div class="card__wrap">
    <div class="card__input">
      <input type="text" v-model="editedCard.title" />
    </div>

    <div v-if="todos.length">
      <p class="card__todos-title">Список дел</p>
      <ToDoEditItem
        v-for="todo in todos"
        :key="todo.id"
        :item="todo"
        @changeItem="todoChange"
        @removeTodo="removeTodo"
      />
    </div>
    <div v-else class="card__todos_empty">
    </div>

    <div class="card__add-todo">
      <div class="card__input">
        <input type="text" v-model="newTodoText" />
      </div>
      <button class="card__btn_save" @click.prevent="addNewTodo">Добавить</button>
    </div>

    <div class="card__footer">
      <button class="card__btn_save" @click.prevent="showSaveConfirm">Сохранить</button>
      <a class="card__btn_cancel" @click.prevent="showCancelConfirm">Отмена</a>
    </div>
  </div>

  <Confirm
    :isOpen="confirmSettings.isOpen"
    :removeTypeConfirm="confirmSettings.removeTypeConfirm"
    @close="confirmSettings.isOpen = false"
    @confirm="saveChanges"
    @remove="cancelWithoutSaving"
  >
    {{ confirmSettings.text }}
  </Confirm>
</template>

<script>
import { mapGetters } from 'vuex'
import ToDoEditItem from '@/components/ToDoEditItem'
import Confirm from '@/components/Confirm'
import { generateId } from '@/mixins/utils'

export default {
  components: {
    ToDoEditItem, Confirm
  },

  props: {
    card: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      todos: [],
      deletedTodos: [],
      editedCard: {
        id: this.card.id,
        title: this.card.title,
      },
      confirmSettings: {
        isOpen: false,
        removeTypeConfirm: false,
        text: ''
      },
      newTodoText: ''
    }
  },

  computed: {
    ...mapGetters(['getTodosByCardId'])
  },

  mounted() {
    this.todos = this.getTodosByCardId(this.card.id)
  },

  methods: {
    todoChange (editedTodo) {
      const todo = this.todos.find(todo => todo.id === editedTodo.id)

      todo.text = editedTodo.text
    },

    removeTodo (todoId) {
      const todo = this.todos.find(todo => todo.id === todoId)
      const index = this.todos.indexOf(todo)

      this.todos.splice(index, 1)
      this.deletedTodos.push(todoId)
    },

    saveChanges () {
      this.deletedTodos.forEach( id => this.$bus.emit('todos::removeElement', id))
      this.todos.forEach( todo => this.$bus.emit('todos::updateElement', todo))
      this.$bus.emit('cards::updateElement', this.editedCard)

      this.$router.push({ name: 'list'})
    },

    addNewTodo () {
      if (!this.newTodoText) {
        return
      }
      this.todos.push({ id: generateId(), text: this.newTodoText, checked: false, cardId: this.editedCard.id })
      this.newTodoText = ''
    },

    showCancelConfirm () {
      this.confirmSettings = {
        removeTypeConfirm: true,
        text: 'Отменить изменения и выйти?',
        isOpen: true
      }
    },

    showSaveConfirm () {
      this.confirmSettings = {
        removeTypeConfirm: false,
        text: 'Сохранить изменения и выйти?',
        isOpen: true
      }
    },

    cancelWithoutSaving () {
      this.$router.push({ name: 'list'})
    }

  }
}
</script>

<style lang="scss" scoped>
.card {
  &__wrap {
    background-color: #fff;
    border: 1px solid #000;
    width: 100%;
    max-width: 724px;
    padding: 60px;
    color: $item-text-color;
    margin: auto;
  }

  &__input {
    border: 1px solid #B0B0B0;
    border-radius: 5px;
    padding: 16px 20px;
    flex: 1;

    input {
      @include font-template(20px, 500);
    }
  }

  &__todos-title {
    @include font-template(24px, 600);
    margin: 58px 0 13px;
  }

  &__add-todo {
    display: flex;
    align-items: center;
    padding: 58px 0 68px;
  }

  &__btn_save {
    width: 170px;
    height: 60px;
    border-radius: 5px;
    color: #fff;
    background-color: $ok-btn-color;
    @include font-template(20px, 500);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: $transition;

    &:hover {
      background-color: $ok-btn-hover-color;
    }

    &:not(:first-child) {
      margin-left: 16px;
    }
  }


  &__footer {
    display: flex;
    align-items: center;
  }

  &__btn_cancel {
    color: $item-text-color;
    margin-left: 36px;
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }

  &__todos_empty {
    @include empty-list;
  }
}

</style>