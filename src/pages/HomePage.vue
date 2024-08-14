<script>

import BaseButton from '@/components/BaseButton.vue';

export default {
    components: {
        BaseButton,
    },
    provide: {
        message: 'привет!'
    },
    data() {
        return {
            customMessage: 'Hello from Home page!!!',
            searchText: 'search',
            res: false,
            count: 0,
            textButton: 'Click me',
            firstNumber: 0,
            secondNumber: 0,
            operator: 'sum'
        }
    },
    computed: {
        result() {
            switch (this.operator) {
                case "sum":
                    return this.firstNumber + this.secondNumber
                case "minus":
                    return this.firstNumber - this.secondNumber
                case "multiply":
                    return this.firstNumber * this.secondNumber
                case "divide":
                    return this.firstNumber / this.secondNumber
                default:
                    return 0;
            }
        }
    },
    methods: {
        handleIncreaseClick() {
            this.count += 1;
        },
        handleDecreaseClick() {
            this.count -= 1;
        },

        clickOnButtonComponent() {
            console.log('clickOnButtonComponent');
        }
    }
}
</script>

<template>
    <main>
        <section class="d-flex">
            <BaseButton text-button="increase" @click="handleIncreaseClick"></BaseButton>
            <BaseButton text-button="decrease" @click="handleDecreaseClick"></BaseButton>
            <p>Counter: {{ count }}</p>

            <input type="number" v-model="firstNumber" placeholder="Введите число">
            <button @click="operator = 'sum'"> + </button>
            <button @click="operator = 'minus'"> - </button>
            <button @click="operator = 'multiply'"> * </button>
            <button @click="operator = 'divide'"> / </button>
            <input type="number" v-model="secondNumber">
            <div>Result: {{ result }}</div>
            <img class="base-button" src="../assets/images/components.png"/>
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