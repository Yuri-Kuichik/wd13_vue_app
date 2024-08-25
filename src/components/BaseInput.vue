<template>
    <input 
        :type="type" 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >
</template>

<script>
    export default {
        props: {
            modelValue: {
                type: String,
            },
            type: {
                default: 'text'
            }
        }
    }
</script>

<style scoped>
input {
    width: 100%;
    padding: 13px 12px;
    min-height: 32px;
    border: 1px solid rgb(172, 177, 182);
    border-radius: 8px;
    font-size: 1rem;
    line-height: 1.25;
    cursor: pointer;
}
</style>