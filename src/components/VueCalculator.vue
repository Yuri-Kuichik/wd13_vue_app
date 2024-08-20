<template>
  <calculator-input v-model="countFirst"/>
  <calculator-button
      v-for="(operator, index) in operators"
      :key="`operator_` + index"
      @click="changeOperator(Object.keys(operator)[0])"
      :operator="getOperator(operator)"
  />
  <calculator-input v-model="countSecond"/>
  <div> Result: {{ result }}</div>
</template>

<script>
import CalculatorInput from "@/components/CalculatorInput.vue";
import CalculatorButton from "@/components/CalculatorButton.vue";

export default {
  components: {
    CalculatorButton,
    CalculatorInput
  },

  data() {
    return {
      operator: '',
      countFirst: 0,
      countSecond: 0,
      operators: [
        {'sum': '➕'},
        {'substract': '➖'},
        {'multiply': '✖'},
        {'divide': '➗'}
      ],
    }
  },

  computed: {
    result() {
      if (this.operator === 'sum') {
        return this.countFirst + this.countSecond
      }
      if (this.operator === 'subtract') {
        return this.countFirst - this.countSecond
      }
      if (this.operator === 'multiply') {
        return this.countFirst * this.countSecond
      }
      if (this.operator === 'divide') {
        return this.countFirst / this.countSecond
      }

      return 0
    }
  },

  methods: {
    changeOperator(name) {
      this.operator = name
    },
    getOperator(obj) {
      return obj[Object.keys(obj)[0]]
    }
  }
}

</script>

<style scoped>

</style>