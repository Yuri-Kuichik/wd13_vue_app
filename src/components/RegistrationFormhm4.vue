<template> 
    <form>
        <h2>Form registration</h2>

        <FormInput 
            class="registration-form__input"
            name="username"
            label="username"
            placeholder="Input your email"
            :error-message="emailMsgErr"
            v-model="username"
        />

        <FormInput 
            class="registration-form__input"
            name="email"
            label="Email"
            placeholder="Input your email"
            :error-message="emailMsgErr"
            v-model="email"
        />

        <FormInput
            class="registration-form__input" 
            name="password"
            label="Password"
            placeholder="Input your passowrd"
            password-field
            :error-message="passwordMsgErr"
            :type="passwordFieldType"
            @switchType="switchVisibilityPassword"
            v-model="password"
        
        />
        <FormInput
            class="registration-form__input" 
            name="course_group"
            label="course_group"
            placeholder="course_group"
            v-model="course_group"
            
        />
        <BaseButton 
            class="registration-formhm4__button"v-bind:disabled="dis"
            text-button="Send" 
            :loading="loading"
            @click.prevent="createUser"
        />

    
    </form>
</template>

<script>
import { useAuthStore } from '@/stores/auth';

import FormInput from './FormInput.vue';

export default {
    components: {
        FormInput
    },
    

data() {
        
        return {
            loading: false,
            authStore: useAuthStore(),
            username: '',
            email: '',
            password: '',
            course_group: 12,
            emailMsgErr: '',
            passwordMsgErr: '',
            usernameMsgErr: '',
            passwordFieldType: 'password',
            dis: null,
        }
    },

    methods: {
        switchVisibilityPassword() {
            this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
        },

        async createUser() {
                console.log(this.username)
                console.log(this.email)
                console.log(this.password) 
                 console.log(this.course_group) 
               
            

        },

        async signIn(data) {
            console.log('logIn', data);

            try {
                const response = await fetch('https://studapi.teachmeskills.by/auth/jwt/create/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        email: data.email,
                        password: this.password
                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                this.data = await response.json();

                this.authStore.setToken(this.data.access);
                this.$router.push('/');
            } catch (error) {
                console.log(error.message)

            } finally {
                this.loading = false;
            }
        },


        async activateUser() {
            await this.authStore.authUserActivation()
        }
    }
}
</script>

<style scoped>

.registration-form-form {
    padding-top: 1rem;
}

h2 {
    text-align: center;
}

.registration-form__input {
    margin-top: 20px;
}

.registration-form__button {
    margin-top: 32px;
}
</style>