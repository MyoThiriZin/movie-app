<template>
  <form @submit.prevent="Login">
    <input type="text" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <div v-if="error">{{error}}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import UseLogIn from '../composable/UseLogIn'
export default {
    setup(props,context){

        let email=ref("");
        let password=ref("");

        let {error,loginAccount} =UseLogIn();
        let Login=async()=>{
          let res=await loginAccount(email.value,password.value);
          
          if(res) {
            if(email.value==="test@gmail.com"){
                context.emit("enterCreate");
            }
            else {
                context.emit("enterChatroom")
            }
          }
        }
        return {email, password, Login,error};
    }
}
</script>

<style>

</style>