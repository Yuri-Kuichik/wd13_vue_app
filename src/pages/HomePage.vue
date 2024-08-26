<script>
import BaseLayout from '@/components/BaseLayout.vue';
import PostList from '@/components/PostList.vue';
import VueCalculator from '@/components/VueCalculator.vue';

export default {
    components: {
        BaseLayout,
        PostList,
        VueCalculator
    },

    provide: {
        message: 'привет!'
    },
}
    data() {
        return {step: 1
        }
SignInForm(){return {  prasssword:'',
email:'',

        },
RegistrationForm(){return {
prasssword:'',
email:'',
username:'',
course:'12',    
}      
        }   
        } 
    }

props:['PostsList']
props:['PostsListFilter']
registeruser(){
console.log(this.SignInForm. SignInForm.email)
console.log(this.SignInForm. SignInForm. prasssword)
console.log(this.SignInForm. SignInForm. prasssword)
console.log(this.SignInForm. SignInForm.email)
    console.log(this.SignInForm. SignInForm.username)
    
console.log(this.SignInForm. SignInForm.course )
}





methods:{
nexStep() {
this.step++
}
}

</script>

<template>
    <BaseLayout>
        <PostList />

        <!-- <div class="d-flex d-flex_jcc">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        </div> -->
    </BaseLayout>
<input v-model="prassword" name="prassword" placeholder="prassword" type="text" >
<input v-model="email" name="email" placeholder="email" type="email">
<button @clik="nexStep" :disabled="!name || !email || !prassword || course">SignInForm</button>

<input v-model="username" name="username" placeholder="username" type="text" >
<input v-model="email" name="email" placeholder="email" type="email">
<input v-model="prassword" name="prassword" placeholder="prassword" type="text" >
<input v-model="course" name="course" placeholder="course" type="course">
</template>
<button@clik="nexStep" :disabled="!name, || !email || !prassword || !course ">RegistrationForm</button>

<style scoped>
    
</style>