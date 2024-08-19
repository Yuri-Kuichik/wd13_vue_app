<script>
import BaseLayout from '@/components/BaseLayout.vue';
import SignInForm from "@/components/SignInForm.vue";
import RegistrationForm from "@/components/RegistrationForm.vue";
import AuthSwitcher from "@/components/AuthSwitcher.vue";

export default {
    components: {
        BaseLayout,
        SignInForm,
        RegistrationForm,
        AuthSwitcher
    },

    provide: {
        message: 'привет!'
    },

    data() {
        return {

        }
    },

    methods: {

    }
}
</script>

<template>
    <AuthSwitcher></AuthSwitcher>

    <BaseLayout>
        <div class="d-flex d-flex_jcc">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        </div>
    </BaseLayout>
</template>

<style scoped>

</style>