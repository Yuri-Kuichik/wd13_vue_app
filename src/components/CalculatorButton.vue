<template>
  <button class="calc-btn">
    <span> {{ operator }} </span>
  </button>
</template>

<script>
export default {
  props: {
    operator: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>