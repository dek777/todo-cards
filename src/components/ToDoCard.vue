<template>
  <div class="card__wrap">

    <div class="card__header">
      <p class="card__title">{{ card.title }}</p>
      <div class="card__icons-wrap">
        <router-link :to="`/edit/${card.id}`">
          <svg class="card__icon card__icon_edit">
            <use xlink:href="@/assets/icons/sprite.svg#edit"></use>
          </svg>
        </router-link>
        <svg class="card__icon card__icon_remove" @click="$emit('removeCard', card.id)">
          <use xlink:href="@/assets/icons/sprite.svg#remove"></use>
        </svg>
      </div>
    </div>

    <div class="card__body">
      <ToDoItem v-for="todo in getTodosByCardId(card.id)" :item="todo" :key="todo.id" />
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ToDoItem from '@/components/ToDoItem'

export default {
  components: {
    ToDoItem
  },

  props: {
    card: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapGetters(['getTodosByCardId'])
  },

}
</script>

<style lang="scss">
.card {
  &__wrap {
    width: 100%;
    max-width: $card-width;
    height: 100%;
    background-color: #fff;
  }

  &__header {
    background-color: $card-header-background;
    display: flex;
    align-items: center;
    padding: 0px 15px 0 30px;
    height: 80px;
  }

  &__title {
    @include font-template(24px, 600);
    @include ellipsis;
    color: $card-title-color;
    flex: 1;
    padding-right: 10px;
  }

  &__icons-wrap {
    margin-left: auto;
  }

  &__icon {
    width: 35px;
    height: 35px;
    cursor: pointer;
    transition: $transition;

    &:first-child {
      margin-right: 10px;
    }

    &_remove {
      stroke: $remove-btn-color;

      &:hover {
        stroke: $remove-btn-hover-color;
      }
    }

    &_edit {
      stroke: #2191D0;

      &:hover {
        stroke: #1a74a6;
      }
    }
  }

  &__body:empty {
    @include empty-list;
  }
}

</style>