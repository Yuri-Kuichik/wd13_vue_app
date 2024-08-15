<template>
    <button>
        <VueSpinner v-if="loading" />
        <span v-else>
            {{ textButton }}
        </span>
    </button>  
</template>

<script>
import VueSpinner from './VueSpinner.vue';

export default {
    components: { 
        VueSpinner 
    },
    
    props: {
        textButton: {
            type: String,
            default: 'Click me'
        },
        loading: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        click() {
            this.$emit()
        }
    }
}
</script>

<style scoped>
button {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    background: rgb(253, 211, 42);
    /* background: var(--color-primary); */
    /* color: var(--color-text); */
    color: rgb(7, 7, 7);
    border-radius: 8px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    width: 100%;
    height: 48px;
}

button:hover {
        opacity: 0.9;
    }


</style>
