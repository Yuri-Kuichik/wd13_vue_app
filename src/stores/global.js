// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {

  // как data() {}
  state: () => ({ 
    token: '',
    count: 0
  }),

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
    },
    setToken(newToken) {
      console.log('set new token')
      this.token = newToken;
    }
  },
})


















// export const useGlobalStore = defineStore('global', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2);

//   const token = ref('')

//  // Метод для установки токена
//   function setToken(newToken) {
//     token.value = newToken;
//   }

//   function increment() {
//     count.value++
//   }

//   return { 
//     count, 
//     doubleCount,
//     token, 
//     setToken,
//     increment
//    }
// })