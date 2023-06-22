<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="SignUp">
    <input type="text" placeholder="Display Name" v-model="displayName">
    <input type="text" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <div v-if="error">{{error}}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import UseSignUp from '../composable/UseSignUp'
export default {
    setup(props,context){
        let displayName=ref("");
        let email=ref("");
        let password=ref("");


        let { error, createAccount} =UseSignUp();
        let SignUp=async()=>{

            let res= await createAccount(email.value,password.value,displayName.value);
          
            if(res){
            //  console.log(res.user);
            context.emit("enterChatroom");
            } 
 
        }
        return {displayName, email, password, SignUp, error};
    }
}
</script>

<style>

</style>