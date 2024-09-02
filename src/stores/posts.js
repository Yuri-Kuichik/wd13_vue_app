import { defineStore } from 'pinia'
import { useAuthStore } from './auth';

export const usePostsStore = defineStore('posts', {
   state() {
        return {
            author__course_group: 12,
            limit: 15
        }
   }, 

   getters: {

   },

   actions: {
        getPostListParams(paramsData) {
            let str = ''
            let arr = Object.keys(paramsData).reduce((acc, param) => {
                return paramsData[param] ? [...acc, `${param}=${paramsData[param]}`] : acc
            }, [])
        
            if (!!arr.length) {
                str = '?' + arr.join('&')
            }

            return str
        },


        // getParamsList({limit, searchStr, groupId}) {
        //     let arr = []
        //     let str = ''

        //     if (!!limit) {
        //         arr.push(`limit=${limit}`) 
        //     }
        //     if (!!searchStr) {
        //         arr.push(`search=${searchStr}`) 
        //     }
        //     if (!!groupId) {
        //         arr.push(`author__course_group==${groupId}`) 
        //     }

        //     if (!!arr.length) {
        //         str = '?' + arr.join('&')
        //     }

        //     return str
        // },

        async getPostList(limit, search, author__course_group) {
            limit = limit || this.limit
            author__course_group = author__course_group || this.author__course_group

            const pamarsStr = this.getPostListParams({
                limit, search, author__course_group
            })

            return await fetch(`https://studapi.teachmeskills.by/blog/posts/${pamarsStr}`);
        },

        async getPost(id) {
            return await fetch(`https://studapi.teachmeskills.by/blog/posts/${id}/`);
        },

        async getMyPostList() {
            const authStore = useAuthStore()
            const token = authStore.token

            return await fetch('https://studapi.teachmeskills.by/blog/posts/my_posts/', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json;charset=utf-8'
                }
              });
        },

        async editPost(id, data) {
            const authStore = useAuthStore()
            const token = authStore.token

            return await fetch(`https://studapi.teachmeskills.by/blog/posts/${id}/`, {
                method: 'PUT',
                headers: {
                   'Authorization': `Bearer ${token}`,
                   'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(data)
              });
        },

        async addPost(data) {
            const authStore = useAuthStore()
            const token = authStore.token

            return await fetch('https://studapi.teachmeskills.by/blog/posts/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(data)
              });
        },

        async deletePost(idPost) {
            const authStore = useAuthStore()
            const token = authStore.token

            return await fetch(`https://studapi.teachmeskills.by/blog/posts/${idPost}/`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json;charset=utf-8',
                }
              });
        }


   }
}) 