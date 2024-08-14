<script>
import BaseLayout from '@/components/BaseLayout.vue';

export default {
    components: {
        BaseLayout
    },

    provide: {
        message: 'привет!'
    },

    data() {
        return {
            
        } 
    },

    methods: {
       
    }
}
</script>

<template>
    <BaseLayout>
        <div class="d-flex d-flex_jcc">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        </div>
    </BaseLayout>
</template>

<style scoped>
    
</style>