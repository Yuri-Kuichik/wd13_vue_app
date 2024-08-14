<template>
    <button>

        {{ textButton}}
    </button>

        {{ textButtonDefault }}
    </button>  

</template>

<script>
export default {
    props: {
      textButton: {
        type: String,
        default: 'click me'
      }
    },

    data() {
        return {
            textButtonDefault: this.textButton
        }
    },

}
</script>

<style scoped>


</style>
