<template>
    <div class="form-switcher">
        <div class="button-group">
            <button @click="switchToSignIn" :class="{ active: activeComponent === 'SignInForm' }">Sign In</button>
            <button @click="switchToRegistration" :class="{ active: activeComponent === 'RegistrationForm' }">Register</button>
        </div>

        <component :is="activeComponent"></component>
    </div>
</template>

<script>
import SignInForm from "@/components/SignInForm.vue";
import RegistrationForm from "@/components/RegistrationForm.vue";

export default {
    components: {
        SignInForm,
        RegistrationForm
    },
    data() {
        return {
            activeComponent: "SignInForm"
        };
    },
    methods: {
        switchToSignIn() {
            this.activeComponent = "SignInForm";
        },
        switchToRegistration() {
            this.activeComponent = "RegistrationForm";
        }
    }
};
</script>

<style scoped>
.form-switcher {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 50px;
}

.form-switcher button {
    width: 100px;
    padding: 10px 20px;
    margin: 10px;
    border: none;
    cursor: pointer;
    background-color: #42b983;
    color: white;
    border-radius: 4px;
}

.form-switcher button.active {
    background-color: #034626;
}

.form-switcher button:not(.active):hover {
    background-color: #32a36b;
}
</style>