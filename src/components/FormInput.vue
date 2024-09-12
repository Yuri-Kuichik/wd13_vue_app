<template>
    <div class="form-input" :class="{'form-input_password': passwordField, 'js--error': isErorr}">
        <div class="form-input-wrapper">
            <label :for="name">{{ label }}</label>
            <input 
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                :type="type" 
                :id="name"
                :placeholder="placeholder"
            >
     
            <button v-if="passwordField" type="button" @click="$emit('switchType')">
                <span class="icon-wrapper">
                    <IconShow v-if="type === 'text'"/>
                    <IconHide v-else/>
                </span>
            </button>  
        </div>
        
        <span class="form-input__error"> {{ errorMessage }} </span>
    </div>
</template>

<script>
import IconHide from '@/assets/icons/IconHide.vue';
import IconShow from '@/assets/icons/IconShow.vue';

export default {
    components: {
        IconHide,
        IconShow
    },

    emits: ['update:modelValue'],

    props: {
        modelValue: {
            type: String,
        },
        name: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        passwordField: {
            type: Boolean,
            default: false
        },
        errorMessage: {
            type: String
        }
    },

    computed: {
        isErorr() {
            return !!this.errorMessage
        }
    }
}

</script>

<style scoped>

.form-input_password input {
    padding-right: 42px;
}

.form-input_password button {
    position: absolute;
    bottom: 5px;
    right: 5px;
    padding: 8px;
    border-radius: 20px;
    /* color: var(--color-text-emphasis); */
}

.form-input_password button:hover {
    background: rgba(192, 201, 216, .2);
}

.form-input.js--error input {
    border-color: var(--colors-error);
}

.form-input-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    overflow: hidden; 
}

input {
    padding: 8px;
    min-height: 32px;
    border: 1px solid rgba(0,0,0, .2);
    border-radius: 4px;
    font-size: 1rem;
    line-height: 1.5;
}

input::placeholder {
   color: rgba(0, 0, 0, .26);
}

input:focus-visible {
    border-color: rgb(253, 211, 42);
    /* border-color: var(--color-primary); */
}

.icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.form-input__error {
    margin-top: 4px;
    display: block;
    color: var(--colors-error);
    font-size: 12px;
    line-height: 16px;
}


</style>