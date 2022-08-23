<template>
  <ToDoEditCard :card="getFromStateById({id: cardId, stateName: 'cards'})" />
</template>

<script>
import { mapGetters } from 'vuex'
import ToDoEditCard from '@/components/ToDoEditCard'

export default {
  name: 'ToDoEditView',

  components: {
    ToDoEditCard
  },

  data () {
    return {
      cardId: parseInt(this.$route.params.id)
    }
  },

  computed: {
    ...mapGetters(['getFromStateById'])
  }
}
</script>

<style lang="scss">

</style>