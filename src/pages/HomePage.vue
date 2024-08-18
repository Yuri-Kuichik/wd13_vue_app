<script>
import BaseLayout from '@/components/BaseLayout.vue';
import FormSwitcher from "@/components/FormSwitcher.vue";

export default {
    components: {
        BaseLayout,
        FormSwitcher
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
    <BaseLayout>
        <FormSwitcher></FormSwitcher>
        <div class="d-flex d-flex_jcc">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        </div>
    </BaseLayout>
</template>

<style scoped>

</style>