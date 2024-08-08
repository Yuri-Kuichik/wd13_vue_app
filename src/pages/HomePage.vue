<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    data() {
        return {
            message: 'Hello from Home page'
        } 
    },

    components: {
        HelloWorld
    }
}
</script>

<template>
  <main>
    <HelloWorld :msg="message" />
  </main>
</template>