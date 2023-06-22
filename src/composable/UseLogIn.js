import { ref } from 'vue';
import { auth } from '../firebase/config'

let error=ref(null);

let loginAccount = async(email,password)=>{
    try {
        let res=await auth.signInWithEmailAndPassword(email,password);
        console.log(res.user.email);

        if(!res){
          throw new Error("Can't login account");
        }
        return res;
    } catch(err) {
        error.value=err.message;
        console.log(err.value);
    }
    
}


let UseLogIn=()=>{
    return {error,loginAccount}
}
export default UseLogIn;