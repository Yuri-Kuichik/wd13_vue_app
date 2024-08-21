<template>

    <div class="vue-calculator">
        <h2>Calculator</h2>
        <div>
            <BaseInput type="number" v-model.number="countFirst"/>
        </div>
        
        <div class="operators-wrapper">
            <BaseButton 
                v-for="(operator, index) in operators" 
                :key="'operator_' + index"
                :text-button="getOperator(operator)"
                @click="changeOperator(Object.keys(operator)[0])"
            />
        </div>
        
        <div>
            <BaseInput type="number" v-model.number="countSecond"/>
        </div>
        
        <div>
            <strong> Result: {{ result }}</strong> 
        </div>
    </div>
   
</template>

<script>
import OperatorButton from './VueButton.vue';
import BaseInput from './BaseInput.vue';
import BaseButton from './BaseButton.vue';

export default {
    components: {
        OperatorButton,
        BaseInput,
        BaseButton
    },

    data: () => ({
        operator: 'sum',
        countFirst: 0,
        countSecond: 0,
        operators: [
            {sum: '+'}, 
            {subtract: '-'},
            {multiply: '*'},
            {divide: '/'}
        ]
    }),

    computed: {
        result() {
            if(this.operator === 'sum') {
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
            } else {
                return 0
            }
        }
    },

    methods: {
       changeOperator(name) {
         this.operator = name
       },
       getOperator(obj) {
        return obj[Object.keys(obj)[0] ]
       }
    }
}

</script>

<style>
.vue-calculator {
    max-width: 250px;
}

input {
    border: solid 1ps black;
    border-radius: 4px;
}

 .operators-wrapper {
    display: flex;
    gap: 0.5rem;

    margin: 1rem 0;
 }
</style>