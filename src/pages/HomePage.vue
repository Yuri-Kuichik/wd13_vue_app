<script>
import BaseLayout from '@/components/BaseLayout.vue';
import PostList from '@/components/PostList.vue';
import VueCalculator from '@/components/VueCalculator.vue';
import VueCounter from "@/components/VueCounter.vue";

export default {
    components: {
        BaseLayout,
        PostList,
        VueCalculator,
        VueCounter,
    },

    provide: {
        message: 'привет!'
    },

    data() {
        return {
          customMessage: 'Hello from Home page!!!',
          searchText: 'search',
          num: 4,
          res: false,
          textButton: 'Click me',
        }
    },
}
</script>

<template>
    <BaseLayout>
        <PostList />
        <vue-counter />
        <vue-calculator />
        <!-- <div class="d-flex d-flex_jcc">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        </div> -->
    </BaseLayout>
</template>

<style scoped>

</style>