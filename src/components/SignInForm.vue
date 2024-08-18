<template>
    <form @submit.prevent="getSignInData" class="signIn-container">
        <input
            type="email"
            v-model="email"
            :placeholder="emailPlaceholder"
            required
            class="input-field"
        />
        <input
            type="password"
            v-model="password"
            :placeholder="passwordPlaceholder"
            required
            class="input-field"
        />
        <button type="submit" :disabled="isDisabled" class="submit-button">
            Submit
        </button>
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
.signIn-container {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.input-field {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
}

.submit-button {
    padding: 10px 15px;
    background-color: #42b983;
    border: none;
    color: white;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

.submit-button:disabled {
    background-color: #c4c4c4;
    cursor: not-allowed;
}

.submit-button:hover:not(:disabled) {
    background-color: #36a973;
}
</style>