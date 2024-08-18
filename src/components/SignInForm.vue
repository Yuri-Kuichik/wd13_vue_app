<template>
    <form @submit.prevent="getSignInData()">
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
        <button type="submit" :disabled="isDisabled">Submit</button>
    </form>
</template>

<script>
export default {
    props: {
        emailPlaceholder: {
            type: String,
            default: 'Enter Email'
        },
        passwordPlaceholder: {
            type: String,
            default: 'Enter Password'
        }
    },
    data() {
        return {
            email: '',
            password: ''
        };
    },
    computed: {
        isDisabled() {
            return this.email.length === 0 || this.password.length <= 5;
        }
    },
    methods: {
        getSignInData() {
            console.log('Email:', this.email);
            console.log('Password:', this.password);
        }
    }
};
</script>

<style scoped>

</style>