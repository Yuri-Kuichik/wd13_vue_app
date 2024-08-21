<script>
import BaseLayout from '@/components/BaseLayout.vue';
import PostList from '@/components/PostList.vue';
import VueCalculator from '@/components/VueCalculator.vue';

export default {
    components: {
        BaseLayout,
        PostList,
        VueCalculator
    },

    provide: {
        message: 'привет!'
    },

    data() {
        return {
            
        } 
    },
}
</script>

<template>
    <BaseLayout>
        <PostList />

        <!-- <div class="d-flex d-flex_jcc">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        </div> -->
    </BaseLayout>
</template>

<style scoped>
    
</style>