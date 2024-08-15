import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2);

  const token = ref('')

 // Метод для установки токена
  function setToken(newToken) {
    token.value = newToken;
  }

  function increment() {
    count.value++
  }

  return { 
    count, 
    doubleCount,
    token, 
    setToken,
    increment
   }
})
