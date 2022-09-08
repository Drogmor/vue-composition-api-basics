import { defineStore } from "pinia"

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    title: "Current counter",
  }),
  actions: {
    increaseCounter() {
      this.count++
    },
    decreaseCounter() {
      this.count > 0 ? this.count-- : this.count === 0
    },
  },
})

/* 
  Pinia replaced Vuex as the gold standard for state management
  Advantages:
  Only 3 sections:
  1. state
  2. actions
  3. getters

  In Pinia actions can manipulate the state || in Vuex actions can only access the state but not manipulate it.
  Vuex is using mutations.
  For example:
    mutations: {
      increment() {
        this.counter++
      }
    },
    actions: {
      increment() {
        commit('increment')
      }
    }
  
  Pinia is extremely light.
  We produce less code.
  Advanced debugging capabilities
*/
