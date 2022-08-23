<template>
  <ToDoEditCard :card="card" />
</template>

<script>
import ToDoEditCard from '@/components/ToDoEditCard'
import { generateId } from '@/mixins/utils'

export default {
  name: 'ToDoAddView',

  components: {
    ToDoEditCard
  },

  data () {
    return {
      card: {
        id: generateId(),
        title: ''
      }
    }
  },
}
</script>

<style>

</style>