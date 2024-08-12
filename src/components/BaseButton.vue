<template>
    <button>
        {{ textButtonDefault }}
    </button>  
</template>

<script>
export default {
    data() {
        return {
            textButtonDefault: 'Click me'
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


</style>
