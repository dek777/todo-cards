<template>
  <div class="item__wrap" @click="onclick">
    <div :class="{'item__checkbox': true, 'item__checkbox_checked': item.checked}"></div>
    <p class="item__text">{{ item.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  methods: {
    onclick () {
      this.$bus.emit('todos::toggleCheckedStatus', this.item.id)
    },
  }
}
</script>

<style lang="scss">
.item {
  &__wrap {
    display: flex;
    align-items: center;
    padding: 20px 30px;
    cursor: pointer;
    border-bottom: 1px solid $card-header-background;
  }

  &__text {
    color: $item-text-color;
    margin: 0;
    @include ellipsis;
  }

  &__checkbox {
    width: 25px;
    height: 25px;
    border: 2px solid #B7B7B7;
    border-radius: 3px;
    margin-right: 20px;
    min-width: 25px;
    transition: $transition;
    position: relative;

    &_checked {
      background: $accent-color;
      border-color: $accent-color;

      &:after {
        position: absolute;
        content: '';
        width: 16px;
        height: 8px;
        border: 0 solid #fff;
        border-left-width: 2px;
        border-bottom-width: 2px;
        transform: rotate(-45deg);
        top: 2px;
        left: 2px;
      }

      & + .item__text {
        @include stroked-text;
      }
    }

    .item__wrap:hover & {
      border-color: $accent-color;
    }
  }

}

</style>