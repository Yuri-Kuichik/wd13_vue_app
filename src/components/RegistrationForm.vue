
<template>
    <form @submit.prevent="getRegisterData()">
        <input
            type="text"
            v-model="userName"
            :placeholder="userNamePlaceholder"
            required
        />
        <input
            type="email"
            v-model="email"
            :placeholder="emailPlaceholder"
            required
        />
        <input
            type="password"
            v-model="password"
            :placeholder="passwordPlaceholder"
            required
        />
        <input
            type="number"
            v-model="courseGroup"
            :placeholder="idPlaceholder"
            required
        />
        <button type="submit" :disabled="isDisabled">Submit</button>
    </form>
</template>

<script>

export default {
    props: {
        userNamePlaceholder: {
            type: String,
            default: 'Enter User Name'
        },
        emailPlaceholder: {
            type: String,
            default: 'Enter Email'
        },
        passwordPlaceholder: {
            type: String,
            default: 'Enter Password'
        },
        idPlaceholder: {
            default: 'Enter Course Group ID'
        }

    },
    data() {
        return {
            userName: '',
            email: '',
            password: '',
            courseGroup: null,
        };
    },
    computed: {
        isDisabled() {
            return this.userName.length === 0
                || this.email.length === 0
                || this.password.length <= 5
                || this.courseGroup <= 0;
        }
    },
    methods: {
        getRegisterData() {
            console.log('UserName:', this.userName);
            console.log('Email:', this.email);
            console.log('Password:', this.password);
            console.log('CourseGroup:', this.courseGroup);
        },

    }
};
</script>

<style scoped>

</style>