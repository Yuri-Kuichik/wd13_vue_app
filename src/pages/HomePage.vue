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