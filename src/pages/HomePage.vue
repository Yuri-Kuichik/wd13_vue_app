<script>
import BaseInput from '../components/BaseInput.vue';
import BaseButton from '../components/BaseButton.vue';
import PostListItem from '../components/PostListItem.vue';
import PostList from '../components/PostList.vue';

export default {
    components: {
        BaseInput,
        BaseButton,
        PostListItem,
        PostList,
    },

    data() {
        return {
            operator: "+",
            firstNumber: 0,
            secondNumber: 0
        }
    },

    methods: {
        
    },

    computed: {
        calculate() {
            if (this.operator === '+') {
                return(Number(this.firstNumber) + Number(this.secondNumber));
            } else if (this.operator === '-') {
                return (Number(this.firstNumber) - Number(this.secondNumber));
            } else if (this.operator === '*') {
                return (Number(this.firstNumber) * Number(this.secondNumber));
            } else if (this.operator === '/') {
                if (this.secondNumber !== 0) {
                    return (Number(this.firstNumber) / Number(this.secondNumber));
                } else {
                    return 'Ошибка: деление на ноль';
                }
            }
        }
    }
}
</script>

<template>
    <section class="d-flex">
        <BaseInput v-model.number="firstNumber" @input="firstNumber = $event.target.value" type="number" />
        <select v-model="operator" name="" id="">
            <option value="/">/</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
        </select>
        <BaseInput v-model.number="secondNumber" @input="secondNumber = $event.target.value" type="number" />
        <p> {{ calculate }}</p>

    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1280px;
    gap: 2rem;
}

section img {
    max-width: 50%;
}   

</style>