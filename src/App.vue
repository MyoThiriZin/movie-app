<template>

  <div class="container">
      <div class="flex app">
    <div class="logo">LOGO</div>
    <nav class="header-nav">
      <router-link to="/view">View</router-link> |
      <router-link to="/">Login to Create</router-link>
    </nav>
  </div>
    <router-view />
  </div>
</template>
<script>
import { ref } from "vue";
// import { auth } from './firebase/config';
import getUser from "./composable/getUser";
export default {
  setup() {},
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
