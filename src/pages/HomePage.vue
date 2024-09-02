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

    data() {
        return {
            
        } 
    },
}
</script>

<template>
    <BaseLayout>
        <PostList />
    </BaseLayout>
<input v-model="prassword" name="prassword" placeholder="prassword" type="text" >
<input v-model="email" name="email" placeholder="email" type="email">
<button @clik="nexStep" :disabled="!name || !email || !prassword || course">SignInForm</button>

<input v-model="username" name="username" placeholder="username" type="text" >
<input v-model="email" name="email" placeholder="email" type="email">
<input v-model="prassword" name="prassword" placeholder="prassword" type="text" >
<input v-model="course" name="course" placeholder="course" type="course">
</template>
<button@clik="nexStep" :disabled="!name, || !email || !prassword || !course ">RegistrationForm</button>

<style scoped>
    
</style>