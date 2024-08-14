<template>
    <h2>{{ title }}</h2>

    <input v-model="searchString" placeholder="Search posts..."/>
    <BaseButton @click="getPosts">Search</BaseButton>

    <div v-if="loading" class="loader"></div>
    <div v-else class="posts-list">

        <section v-if="posts.length">
            <div v-for="post in posts" :key="'post-id_' + post.id">
                <PostListItem :model="post"></PostListItem>
            </div>
        </section>
        <div v-else>Ничего не найдено</div>

    </div>
    
</template>

<script>
import BaseButton from './BaseButton.vue';
import PostListItem from './PostListItem.vue';

export default {
    components: {
        BaseButton,
        PostListItem
    },

    data() {
        return {
            title: 'Posts lists',
            posts: [],
            searchString: '',
            loading: false,
            limitPosts: 5,
            courseGroupId: 12,
        }
    },

    created() {
        this.getPosts()
    },

    methods: {
        async getPosts() {
            this.loading = true
            this.posts =  await fetch(`https://studapi.teachmeskills.by/blog/posts/?author__course_group=${10+2}&limit=${this.limitPosts}&search=${this.searchString}`)
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        this.loading = false
                        alert("Ошибка HTTP: " + response.status);
                    }
                }).then((data) => {
                    this.loading = false
                    return data.results
                })
        }
    },
}
</script>

<style scoped>


</style>