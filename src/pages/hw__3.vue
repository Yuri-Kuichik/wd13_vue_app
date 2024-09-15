<template>
    <BaseLayout class="login-page">
        <div class="form-wrapper" ref="formWrapper">
            <div style="flex-grow: 1;">
                <div class="d-flex">
                    <span 
                        class="form-tab d-flex d-flex_jcc"
                        :class="{'is--active': isActiveTab('VueCalculator')}"
                        Colculator>
                    
                        
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
import VueCalculator from '@/components/VueCalculator.vue';
export default {
    components: {
        VueCalculator,
        
    },

    data() {
        return {
            activeComponent: 'VueCalculator',
        } 
    },
    methods: {
        isActiveTab(name) {
            return this.activeComponent === name
        }

}}

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