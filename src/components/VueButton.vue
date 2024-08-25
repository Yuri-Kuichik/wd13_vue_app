<template>
    <button class="btn calc-btn">
        <span> {{ textButton }} </span>
    </button>
   
</template>

<script>
export default {
    props: {
        textButton: {
            type: String,
            default: 'Click me'
        }
    }
}


</script>