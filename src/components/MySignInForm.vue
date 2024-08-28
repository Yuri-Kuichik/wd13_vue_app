<template>
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
  <base-button textButton="Sign In" :disabled="!isValid" @click="send" />
</template>

<script>
import FormInput from "@/components/FormInput.vue";
import BaseButton from "@/components/BaseButton.vue";
export default {
  components: {BaseButton, FormInput},

  data() {
    return {
      email: '',
      password: ''
    }
  },

  computed: {
    isValid() {
      return this.email !== '' && this.password !== '';
    },
  },

  methods: {
    send() {
      console.log({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
