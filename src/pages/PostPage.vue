<template>
    <BaseLayout class="post-page">
        <VueSpinner v-if="loading" />

        <div v-else>
            <div class="post-page__header">
                <h1 class="title">{{ postData.title }}</h1> <small>{{ postData.date }}</small>
            </div>

            <div class="post-page__body">
                <img :src="postData.image" alt="post image">
                <p>{{ postData.text }}</p>
            </div>
            
        </div>
    </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import VueSpinner from '@/components/VueSpinner.vue';

import { usePostsStore } from '@/stores/posts'; 

export default {
    components: {
        BaseLayout,
        VueSpinner
    },

    data() {
        return {
            postData: {},
            loading: false,
            postsStore: usePostsStore()
        }
    },

    async created() {
        this.loading = true;
        const postId = this.$route.params.id

        try {
            const response = await this.postsStore.getPost(postId);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            this.postData = await response.json();
        } catch (error) {
            console.log(error.message)
        } finally {
            this.loading = false;
        }
    }
}

</script>

<style scoped>
.title {
    font-size: 2rem;
}

.post-page__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
}

.post-page__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.post-page__body img {
    width: 60%;
    height: auto;
    margin-bottom: 1.5rem;
}

</style>