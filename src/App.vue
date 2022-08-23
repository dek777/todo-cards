<template>
  <div class="container__wrap">
    <h1 class="container__title">TO DO {{$route.name?.toUpperCase() || 'LIST'}}</h1>
    <div class="page__content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    ['cards::removeElement', 'todos::removeElement', 'cards::updateElement', 'todos::updateElement', 'todos::toggleCheckedStatus'].forEach( eventName => {
      const stateName = eventName.split('::')[0]
      const actionName = eventName.split('::')[1]

      this.$bus.on( eventName, data => {
        this.$store.dispatch(actionName, {stateName: stateName, data: data})

        this.saveCardsToLocalStorage()
      })
    } )

  },

  beforeUnmount () {
    this.saveCardsToLocalStorage()
  },

  methods: {
    saveCardsToLocalStorage () {
      window.localStorage.setItem('todoListApp::cards', JSON.stringify(this.$store.state.cards))
      window.localStorage.setItem('todoListApp::todos', JSON.stringify(this.$store.state.todos))
    }
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  background: $body-background;
  padding-bottom: 200px;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: $font-family;
}

.container {
  &__wrap {
    max-width: 1630px;
    padding: 0 15px;
    margin: 0 auto;
  }

  &__title {
    margin: 80px 0;
    text-align: center;
    color: $header-text-color;
    @include font-template(128px, 900);
  }
}

textarea,
input[type="text"],
button {
  &,
  &:focus,
  &:hover {
    font-family: $font-family;
    outline: 0;
    border: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    color: $item-text-color;
  }
}

textarea {
  resize: none;
}

</style>
