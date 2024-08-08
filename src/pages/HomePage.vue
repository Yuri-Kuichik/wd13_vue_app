<script>
import HelloWorld from '@/components/HelloWorld.vue';
import BaseButton from '@/components/BaseButton.vue';

export default {
    components: {
        HelloWorld,
        BaseButton
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
            textButton: 'Click me'
        } 
    },
    methods: {
        increaseCount(num) {
            this.count += num
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
            <HelloWorld class="msg" :msg="message" :theme="'dangersss'" />
            <img class="base-button"  src="../assets/images/components.png" />
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