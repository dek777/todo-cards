<template>
  <div v-if="isOpen" class="confirm__overlay" @click="outsideClick">
    <div class="confirm__modal">
      <p class="confirm__text"><slot /></p>
      <div class="confirm__footer">
        <button
          :class="[
            'confirm__btn',
            removeTypeConfirm ? 'confirm__btn_remove' : 'confirm__btn_save'
          ]"
          @click.prevent="$emit(removeTypeConfirm ? 'remove' : 'confirm')"
        >
          Да
        </button>
        <button class="confirm__btn" @click.prevent="$emit('close')">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },

    removeTypeConfirm: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    outsideClick (e) {
      if (!e.target.closest('.confirm__modal')) {
        this.$emit('close')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.confirm {
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: $confirm-overlay-bg;
    display: flex;
  }

  &__modal {
    width: $confirm-width;
    height: $confirm-height;
    background: #fff;
    color: $confirm-text-color;
    padding: 15px;
    margin: auto;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
  }

  &__text {
    margin: auto;
  }

  &__footer {
    display: flex;
    margin-top: auto;
  }

  &__btn {
    padding: 10px 15px;
    border: 1px solid $cancel-btn-color;
    border-radius: 4px;
    background: #fff;
    color: $cancel-btn-color;
    transition: $transition;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: $cancel-btn-color;
      color: #fff;
    }

    &:first-child {
      margin-right: 15px;
    }

    &_remove {
      background: $remove-btn-color;
      border-color: $remove-btn-color;
      color: #fff;

      &:hover,
      &:focus {
        background: $remove-btn-hover-color;
      }
    }

    &_save {
      background: $ok-btn-color;
      border-color: $ok-btn-color;
      color: #fff;

      &:hover,
      &:focus {
        background: $ok-btn-hover-color;
        border-color: $ok-btn-hover-color
      }
    }
  }
}
</style>