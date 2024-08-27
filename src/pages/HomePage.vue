<script>
import { mapState, mapStores } from 'pinia';
import { useGlobalStore } from '@/stores/global';
import { useAuthStore } from '@/stores/auth';
import { usePostsStore } from '@/stores/posts';
import { useGroupStore } from '@/stores/group';

import BaseLayout from '@/components/BaseLayout.vue';
import PostList from '@/components/PostList.vue';

export default {
    components: {
        BaseLayout,
        PostList
    },

    provide: {
        message: 'привет!'
    },

    computed: {
        // обратите внимание, что мы передаем не массив, а просто одно хранилище за другим
        // каждое хранилище будет доступно как его id + 'Store'
        ...mapStores(useGlobalStore, useAuthStore, usePostsStore, useGroupStore),
    },

    async created() {
        // тестируем запросы
        await this.authStore.getAuthUsersMe()
        await this.postsStore.getMyPosts()
    },

    methods: {
    
    }
}
</script>

<template>
    <BaseLayout>
        <PostList />
    </BaseLayout>
</template>

<style scoped>
    
</style>