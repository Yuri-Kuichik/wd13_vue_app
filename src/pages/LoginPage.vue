<template>
    <BaseLayout class="login-page">
        <div class="form-wrapper" ref="formWrapper">
            <div style="flex-grow: 1;">
                <div class="d-flex">
                    <span 
                        class="form-tab d-flex d-flex_jcc"
                        :class="{'is--active': isActiveTab('SignInForm')}"
                        @click="toggleTab('SignInForm')" 
                    >
                        Sign in
                    </span>

                    <span 
                        class="form-tab d-flex d-flex_jcc"
                        :class="{'is--active': isActiveTab('RegistrationForm')}"
                        @click="toggleTab('RegistrationForm')"
                    >
                        Registragion
                    </span>  
                </div>
                
                <KeepAlive>
                    <component :is="activeComponent"></component>
                </KeepAlive>
                
            </div>
        </div> 
    </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import SignInForm from '@/components/SignInForm.vue';
import RegistrationForm from '@/components/RegistrationForm.vue';

export default {
    components: {
        BaseLayout,
        SignInForm,
        RegistrationForm
    },

    data() {
        return {
            activeComponent: 'SignInForm',
        } 
    },

    methods: {
        isActiveTab(name) {
            return this.activeComponent === name
        },
        toggleTab(name) {
            this.activeComponent = name
        }
    }
}

</script>

<style scoped>
    .login-page {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 1280px;
    }

    .form-wrapper {    
        display: inline-flex;
        flex-grow: 1;
        padding: 2rem;
        max-width: 480px;
        border: solid 1px rgba(0,0,0,.12);
        border-radius: 8px;
    }

    .form-tab {
        padding: 1rem;
        cursor: pointer;
    }

    .form-tab.is--active {
        /* border-bottom: solid 1px hsla(160, 100%, 37%, 1); */
        border-bottom: solid 1px rgb(253, 211, 42);
    }

</style>