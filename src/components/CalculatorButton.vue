<template>
  <button class="calc-btn" @click="$emit('calculate', 'sum')">
    <span> ➕ </span>
  </button>
    <button class="calc-btn" @click="$emit('calculate', 'subtract')">

    <span> ➖ </span>
  </button>
    <button class="calc-btn" @click="$emit('calculate', 'multiply')">

    <span> ✖ </span>
  </button>
    <button class="calc-btn" @click="$emit('calculate', 'divide')">

    <span> ➗ </span>
  </button>
</template>

<script>
export default {
  emits: ['calculate']
}
</script>

<style scoped>

</style>