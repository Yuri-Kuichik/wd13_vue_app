<template>
    <button class="base-batton" :class="rootClass" @click="click">
        <VueSpinner v-if="loading" />
        <span v-else>
            {{ textButtonValue }}
        </span>
    </button>  
</template>

<script setup>

import VueSpinner from "@/components/VueSpinner.vue";
import {computed} from "vue";

const props = defineProps({
  textButton: String,
  size: String,
  loading: Boolean
})

const emits = defineEmits(['someClick'])

function click() {
  emits('someClick')
}

const rootClass = computed(() => {
  return `base-batton_size--${props.size}` || 'base-batton_size--m'
})

const textButtonValue = computed(() => {
  return props.textButton || 'Click me'
})


</script>

<style scoped>
.base-batton {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    background: rgb(253, 211, 42);
    color: rgb(7, 7, 7);
    border-radius: 8px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    max-width: 100%;
    height: 48px;
}

.base-batton:hover {
    opacity: 0.9;
}

.base-batton_size--s {
    height: 24px;
}

.base-batton_size--m {
    height: 36px;
}

.base-batton_size--l {
    padding: 0 16px;
    height: 48px;
}


</style>
