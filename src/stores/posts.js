import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
   state() {
        return {
            // groupId: 12,
        }
   }, 

   getters: {

   },

   actions: {
        async getList(limit, searchStr, groupId) {
            return await fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=${limit}&search=${searchStr}&author__course_group=${groupId || ''}`);
        },

        async getPost(id) {
            return await fetch(`https://studapi.teachmeskills.by/blog/posts/${id}/`);
        },

        async editPost(id, data) {
            
        }
   }
}) 