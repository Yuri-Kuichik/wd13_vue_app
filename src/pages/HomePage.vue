<script>

import BaseButton from '@/components/BaseButton.vue';
import CalculatorInput from "@/components/CalculatorInput.vue";
import CalculatorButton from "@/components/CalculatorButton.vue";

export default {
  components: {
    BaseButton,
    CalculatorInput,
    CalculatorButton
  },
  provide: {
    message: 'привет!'
  },
  data() {
    return {
      customMessage: 'Hello from Home page!!!',
      searchText: 'search',
      num: 4,
      res: false,
      count: 0,
      textButton: 'Click me',
      countFirst: 0,
      countSecond: 0,
      operator: '',
      result: 0,
    }
  },
  methods: {
    increaseCount() {
      this.count++
    },
    decreaseCount() {
      this.count--
    },
    clickOnButtonComponent() {
      console.log('clickOnButtonComponent');
    },
  },
  computed: {
    calculation(operator) {
      if (operator === 'sum') {
        return this.countFirst + this.countSecond
      }
      if (operator === 'subtract') {
        return this.countFirst - this.countSecond
      }
      if (operator === 'multiply') {
        return this.countFirst * this.countSecond
      }
      if (operator === 'divide') {
        return this.countFirst / this.countSecond
      }

      return 0
    }
  }
}
</script>

<template>
  <main>
    <section class="d-flex">
      <base-button text-button="increase" @some-click="increaseCount"/>
      <base-button text-button="decrease" @some-click="decreaseCount"/>
      {{ count }}
      <img class="base-button" src="../assets/images/components.png"/>
      <calculator-input v-model="countFirst"/>
      <calculator-button @calculate="calculation" />
      <calculator-input v-model="countSecond"/>
      {{ calculation }}
    </section>
  </main>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  gap: 2rem;
}

section img {
  max-width: 50%;
}

</style>