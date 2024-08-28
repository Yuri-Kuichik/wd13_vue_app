<template>
  <FormInput
      type="text"
      name="username"
      label="Username:"
      placeholder="username"
      v-model="username"
  />
  <FormInput
      type="text"
      name="email"
      label="Email:"
      placeholder="example@mail.com"
      v-model="email"
  />
  <FormInput
      type="password"
      name="password"
      label="Password:"
      placeholder="Введите пароль"
      passwordField
      v-model="password"
  />
  <FormInput
      name="course_group"
      type="hidden"
      v-model="course_group"
  />
  <base-button textButton="Register" :disabled="!isValid" @click="send" />
</template>

<script>
import { useGlobalStore } from "@/stores/global.js";

import FormInput from "@/components/FormInput.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {BaseButton, FormInput},

  data() {
    return {
      email: '',
      password: '',
      username: '',
      course_group: '12',
      globalStore: useGlobalStore()
    }
  },

  computed: {
    isValid() {
      return this.email !== '' && this.password !== '' && this.username !== '' && this.course_group !== '';
    },
  },

  methods: {
    async send() {
      console.log({
        email: this.email,
        password: this.password,
        username: this.username,
        course_group: '12'
      })

      const data = {
        email: this.email,
        password: this.password,
        username: this.username,
        course_group: '12'
      }

      await this.globalStore.registrationUser(data)
    }
  }
}
</script>

<style scoped>
.group-input {
  display: none;
}
</style>
