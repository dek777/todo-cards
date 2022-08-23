import { createStore } from 'vuex'
import { cards, todos } from './mockData'

export default createStore({
  state: {
    cards: cards,
    todos: todos
  },

  getters: {
    getTodosByCardId: state => cardId => {
      return state.todos.filter(todo => todo.cardId === cardId)
    },

    getFromStateById: state => ({stateName, id}) => {
      return state[stateName].find(element => element.id === id)
    },
  },

  mutations: {
    REMOVE_ELEMENT (state, {stateName, element}) {
      const index = state[stateName].indexOf(element)

      state[stateName].splice(index, 1)
    },

    UPDATE_ELEMENT (state, {stateName, stateElement, newData}) {
      Object.assign(stateElement, newData)
    },

    ADD_NEW_ELEMENT (state, {stateName, newData}) {
      state[stateName].push(newData)
    },

    TOGGLE_TODO_STATUS (state, todo) {
      todo.checked = !todo.checked
    },

    SET_CARDS (state, cards) {
      state.cards = cards
    },

    SET_TODOS (state, todos) {
      state.todos = todos
    }
  },

  actions: {
    removeElement ({commit, getters}, {stateName, data}) {
      const element = getters.getFromStateById({stateName: stateName, id: data})

      commit('REMOVE_ELEMENT', {stateName: stateName, element: element})
    },

    updateElement ({commit, getters}, {stateName, data}) {
      const element = getters.getFromStateById({stateName: stateName, id: data.id})

      commit( element ? 'UPDATE_ELEMENT' : 'ADD_NEW_ELEMENT', {stateName: stateName, stateElement: element, newData: data})
    },

    toggleCheckedStatus ({commit, getters}, {stateName, data: id}) {
      const todo = getters.getFromStateById({stateName: stateName, id: id})

      commit('TOGGLE_TODO_STATUS', todo)
    }

  }
})
