<template>
  <div class="item-edit__wrap" @dblclick="focusInput">
    <textarea
      v-if="editMode"
      ref="input"
      class="item-edit__input"
      :style="{ 'height': textBlockHeight ? `${textBlockHeight}px` : 'auto'}"
      v-model="editedItem.text"
      @blur="inputBlur"
      @input="onInput"
    />
    <p v-else ref="text" :class="['item-edit__text', item.checked ? 'item-edit__text_stroked' : '']">
      {{item.text}}
    </p>
    <svg class="item-edit__remove-btn" @click="removeClick">
      <use xlink:href="@/assets/icons/sprite.svg#remove"></use>
    </svg>
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

  data () {
    return {
      editMode: false,
      editedItem: {
        id: this.item.id,
        text: this.item.text
      },
      textBlockHeight: null
    }
  },

  methods: {
    focusInput () {
      this.textBlockHeight = this.$refs.text.clientHeight
      this.editMode = true
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },

    inputBlur () {
      this.editMode = false
    },

    onInput () {
      this.$emit('changeItem', this.editedItem)
      this.changeHeight()
    },

    changeHeight () {
      this.textBlockHeight = this.textBlockHeight < this.$refs.input.scrollHeight ? this.$refs.input.scrollHeight : this.textBlockHeight
    },

    removeClick() {
      this.$emit('removeTodo', this.item.id)
    }
  }
}
</script>

<style lang="scss">
.item-edit {
  &__wrap {
    padding: 0 35px 11px 0;
    border-bottom: 1px solid #E8E8E8;
    @include font-template(20px, 500);
    position: relative;
    margin-top: 27px;
  }

  &__input {
    @include font-template(20px, 500);
  }

  &__text {
    margin: 0;
    word-break: break-word;

    &_stroked {
      @include stroked-text;
      width: max-content;
    }
  }

  &__remove-btn {
    position: absolute;
    content: '';
    right: 0;
    top: 0;
    width: 25px;
    height: 25px;
    cursor: pointer;
    stroke: $remove-btn-color;
    transition: $transition;

    &:hover {
      stroke: $remove-btn-hover-color;
    }
  }
}
</style>