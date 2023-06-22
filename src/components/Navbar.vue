<template>
<nav v-if="user">
    <div>
        <p>Hi, {{user.displayName}}</p>
        <p class="email">Logged in as {{user.email}}</p>
    </div>
    <button @click="logout">Logout</button>
</nav>
</template>

<script>
import UseLogout from '../composable/UseLogout'
import UseUser from '../composable/getUser'
export default {
    setup(){

        let {user} = UseUser();
        let { error, logoutAccount}=UseLogout();
        let logout=async()=>{
           
            await logoutAccount();
        }

        return {logout,user}
    }
}
</script>

<style>
nav {
    display: flex;
    justify-content: space-between;
}
nav p {
    margin: 0;
}
</style>