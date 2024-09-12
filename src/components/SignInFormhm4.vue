<template>
    <form class="sign-in-form">
        <h2>Form sign in</h2>

        <FormInput 
            class="sign-in-form__input"
            name="email"
            label="Email"
            placeholder="Input your email"
            :error-message="emailMsgErr"
            v-model="email"
        />

        <FormInput
            class="sign-in-form__input" 
            name="password"
            label="Password"
            placeholder="Input your passowrd"
            password-field
            :error-message="passwordMsgErr"
            :type="passwordFieldType"
            @switchType="switchVisibilityPassword"
            v-model="password"
        />

        <BaseButton 
            class="sign-in-formhm4__button"
            text-button="Submit" 
            :loading="loading"
            @click.prevent="sign":disabled="disabled"
        />
    </form>

</template>

<script>

import FormInput from './FormInput.vue';
import BaseButton from './BaseButton.vue';

export default {
    components: { 
        FormInput,
        BaseButton
     },

    data() {
        return {
            
            email: '',
            password: '',
            passwordFieldType: 'password',
            emailMsgErr: '',
            passwordMsgErr: '',
            loading: false,   
        }
    },
    
    
    computed: {
        isError() {
            return !!(this.emailMsgEr || this.passwordMsgErr)
        },
        disabled(){
            return !this.email || !this.password;
    },

   },   methods: {
        switchVisibilityPassword() {
            this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
        },

    
    async sign(){

         console.log(this.email)
         console.log(this.password) 
    },      
        checkEmail() {
            const regexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
            this.emailMsgErr = regexp.test(this.email) ? '' : 'Enter the correct email'
        },

        checkPassword() {
            this.passwordMsgErr = this.password.length < 6 ? 'The password should be at least 6 characters' : ''
        },
        dis(){
            this.dis=null;
        },
        async signIn() {
            this.checkEmail();
            this.checkPassword();
        
            if (!this.isError) {
                this.loading = true;
                const data = {
                    email: this.email,
                    password: this.password
                }

                try {
                    const response = await this.authStore.signIn(data)

                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    const tokenData = await response.json();

                    this.authStore.setToken(tokenData.access);
                    this.authStore.setRefreshToken(tokenData.refresh);

                    this.$router.push('/');
                } catch (error) {
                    console.log(error.message)

                } finally {
                    this.loading = false;
                }
            }
            
        }
      }   }


    </script>

<style scoped>
    .sign-in-form {
        padding-top: 1rem;
    }

    h2 {
        text-align: center;
    }

    .sign-in-form__input {
        margin-top: 20px;
    }

    .sign-in-form__button {
        margin-top: 32px;
    }
</style>