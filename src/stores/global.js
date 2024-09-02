// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {

  // как data() {}
  state() {
    return {
      count: 0,
    }
  },
  
  // как computed: {}
  getters: {
    doubleCount: (state) => state.count * 2,
    doubleCountPlusOne() {
      return this.doubleCount + 1
    },
  },

  // как methods: {}
  actions: {
    increment() {
      this.count++
    }
  }
})
