<template>
    <h2>{{ title }}</h2>

    <div class="search-wrapper">
        <BaseInput v-model="searchString" placeholder="Search posts..."/>
        <BaseButton class="search-btn" @click="getPosts" text-button="Search" size="l" />
    </div>

    <div v-if="loading" class="loader"></div>
    <div v-else class="posts-list">

        <section v-if="postList.length">
            <div v-for="post in postList" :key="'post-id_' + post.id">
                <PostListItem 
                    class="post-list-item" 
                    @click="openPostPage(post.id)" 
                    :model="post"
                />
            </div>
        </section>
        <div v-else>Ничего не найдено</div>

    </div>
    
</template>

<script>
import { usePostsStore } from '@/stores/posts';

import BaseInput from './BaseInput.vue';
import BaseButton from './BaseButton.vue';
import PostListItem from './PostListItem.vue';
 
export default {
    components: {
        BaseInput,
        BaseButton,
        PostListItem
    },

    data() {
        return {
            loading: false,
            postListData: {},
            postList: [],
            title: 'Posts list',
            searchString: '',
            limitPosts: 5,
            courseGroupId: 12,
            postStore: usePostsStore(),
        }
    },

    created() {
        this.getPosts()
    },

    methods: {
        openPostPage(postId) {
            this.$router.push({name: 'post', params: {id: postId}})
        },

        async getPosts() {
            this.loading = true

            try {
                const response = await this.postStore.getList(this.limitPosts, this.searchString);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                this.postListData = await response.json();
                this.postList = this.postListData?.results;
            } catch(error) {
                console.log(error.message)
            } finally {
                this.loading = false;
            }
        }
    },
}
</script>

<style scoped>
.search-wrapper {
    display: flex;
    gap: 1rem;
    margin: 0.5rem 0 1rem;
}

.post-list-item {
    cursor: pointer;
}

</style>