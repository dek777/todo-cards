<template>
  <ToDoList :cards="cards" />
</template>

<script>
import { mapState } from 'vuex'
import ToDoList from '@/components/ToDoList'

export default {
  name: 'ToDoListView',

  components: {
    ToDoList
  },

  computed: {
    ...mapState(['cards'])
  },

  mounted () {
    const jsonCards = window.localStorage.getItem('todoListApp::cards')
    const jsonTodos = window.localStorage.getItem('todoListApp::todos')

    if (jsonCards) {
      this.$store.commit('SET_CARDS', JSON.parse(jsonCards))
    }
    if (jsonTodos) {
      this.$store.commit('SET_TODOS', JSON.parse(jsonTodos))
    }
  },

}
</script>

<style>

</style>