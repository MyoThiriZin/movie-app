import { ref } from 'vue';
import { auth } from '../firebase/config'

let error=ref(null)
        
let logoutAccount=async()=>{
    try{
        await auth.signOut();
        console.log("User Logout")
    } catch(err) {
        error.value=err.message;
    }
}

let UseLogout=()=>{
    return {error,logoutAccount}
}
export default UseLogout;