import { defineStore } from "pinia";

export const useGroupStore = defineStore('group', {
    state() {
        return {
            groupListData: {},
            groupList: [],
            limit: 15,
            courseGroupId: 12
        }
    },
    getters: {

    },
    actions: {
        isParamsInUrl(url) {
            return url.includes('?')
        },

        async getGroupList(url, limit) {
            url = url || 'https://studapi.teachmeskills.by/blog/groups/'
            limit = limit || this.limit

            const paramLimit = this.isParamsInUrl(url) ? `&limit=${limit}` : `?limit=${limit}`

            try {
                const response = await fetch(`${url}${paramLimit}`)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                this.groupListData = await response.json();
                this.groupList = this.groupListData?.results;

                return response
            } catch(error) {
                console.log(error.message)
            }
        },

        async getGroup(idGroup) {
            idGroup = idGroup || this.courseGroupId

            try {
                const response = await fetch(`https://studapi.teachmeskills.by/blog/groups/${idGroup}`)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                return await response.json()
            } catch(error) {
                console.log(error.message)
            }
        }
            
    }
})