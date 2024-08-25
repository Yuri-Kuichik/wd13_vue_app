<template>
  <base-button text-button="increase" @some-click="increaseCount"/>
  <base-button text-button="decrease" @some-click="decreaseCount"/>
  {{ count }}
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BaseButton
  },

  data() {
    return {
      count: 0
    }
  },

  methods: {
    increaseCount() {
      this.count++
    },
    decreaseCount() {
      this.count--
    },
  }
}
</script>

<style scoped>

</style>
