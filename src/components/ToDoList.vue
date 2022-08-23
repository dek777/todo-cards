<template>
  <div v-if="!isEmptyList" class="list__wrap">
    <div class="list__item" v-for="card in cards" :key="card.id">
      <ToDoCard :card="card" @removeCard="openConfirm" />
    </div>
  </div>
  <div v-else class="list__wrap_empty">
    <p class="list__text">Список пуст</p>
  </div>

  <div :class="{
    'list__add-btn-wrap': true,
    'list__add-btn-wrap_center': isEmptyList
  }">
    <router-link to="/add" class="list__add-btn"></router-link>
  </div>

  <Confirm
    :isOpen="confirmSettings.isOpen"
    removeTypeConfirm
    @close="closeConfirm"
    @remove="removeCard"
  >
    {{ confirmSettings.text }}
  </Confirm>
</template>

<script>
import ToDoCard from '@/components/ToDoCard.vue'
import Confirm from '@/components/Confirm'

export default {
  components: {
    ToDoCard, Confirm
  },

  props: {
    cards: {
      type: Array,
      required: true
    }
  },

  computed: {
    isEmptyList () {
      return this.cards.length === 0
    }
  },

  data () {
    return {
      confirmSettings: {
        isOpen: false,
        text: 'Удалить заметку?',
        cardId: null
      },
    }
  },

  methods: {
    removeCard () {
      if (this.confirmSettings.cardId) {
        this.$bus.emit('cards::removeElement', this.confirmSettings.cardId)
      }
      this.closeConfirm()
    },

    openConfirm (cardId) {
      this.confirmSettings.cardId = cardId
      this.confirmSettings.isOpen = true
    },

    closeConfirm () {
      this.confirmSettings.cardId = null
      this.confirmSettings.isOpen = false
    }
  }
}
</script>

<style lang="scss">
.list {
  &__wrap {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 50px;
    justify-content: center;

    @media (min-width: 550px) {
      grid-template-columns: repeat(1, $card-width);
    }

    @media (min-width: 1100px) {
      grid-template-columns: repeat(2, $card-width);
    }

    @media (min-width: 1650px) {
      grid-template-columns: repeat(3, $card-width);
    }

    &_empty {
      color: #fff;
      text-align: center;
    }
  }

  &__add-btn {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #fff;
    color: #fff;
    display: block;
    margin: auto;
    position: relative;
    transition: $transition;

    &-wrap {
      padding: 80px 0;
      width: 100%;

      @media (min-width: 550px) {
        width: 500px;
      }

      &_center {
        margin: auto;
      }

      @media (max-width: 1650px) {
        margin: auto;
      }
    }

    &:after {
      position: absolute;
      content: "+";
      line-height: 50px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      @include font-template(96px, 300);
      transition: $transition;
    }

    &:hover {
      background-color: #fff;

      &:after {
        color: $accent-color;
      }
    }
  }
}

</style>