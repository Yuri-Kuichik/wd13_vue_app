<script setup>
    import {computed} from 'vue'
 
    const props = defineProps(['type', 'name'])
    console.log(props.type)

    const model = defineModel()

    function updateModel(val) {
        model.value = val
    }

    const typeInput = computed(() => {
        return props.type || 'text'
    })
</script>

<template>
    <input 
        :type="typeInput" 
        :value="model"
        @input="updateModel($event.target.value)"
    >
</template>

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