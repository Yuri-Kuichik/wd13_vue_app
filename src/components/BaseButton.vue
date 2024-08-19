<template>
  <button @click="click">
    {{ textButton }}
  </button>
</template>

<script>
export default {
  props: ['textButton'],
  methods: {
    click() {
      this.$emit('someClick')
    },
  }
}
</script>

<style scoped>

</style>
