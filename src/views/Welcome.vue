<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <!-- <div v-if="enterCreateValue">
        <h3>User Login</h3>
        <Login @enterChatroom="enterChatroom"></Login>

        <p><span @click="showLogin = !showLogin">create account?</span></p>
        <p>
          <span @click="enterCreateValue = !enterCreateValue"
            >Are you an admin?</span
          >
        </p>
      </div> -->
      <!-- <div v-else> -->
        <h3>Admin Login</h3>
        <Login @enterCreate="enterCreate"></Login>
        <!-- <p>
            <span @click="enterCreateValue = !enterCreateValue"
                >Click here to login as user.</span
            >
        </p> -->

      </div>
    <!-- </div> -->
    <div v-else>
      <SignUp @enterChatroom="enterChatroom"></SignUp>
      <p><span @click="showLogin = !showLogin">Already had account?</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import { useRouter } from "vue-router";
export default {
  components: {
    Login,
    SignUp,
  },
  setup() {
    let showLogin = ref(true);
    let router = useRouter();
    let enterCreateValue = ref(true);
    let enterCreate = () => {
        router.push({ name: "create" });

    };
    let enterChatroom=()=>{
      router.push({name:"view"})
    }
    return { showLogin, enterCreate ,enterChatroom, enterCreateValue};
  },
};
</script>

<style>
.welcome {
  text-align: center;
}
.welcome p span {
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
}
</style>