import { ref } from "vue";
import {db} from '../firebase/config'
let getMovie=(id)=>{
    let movie=ref(null);
    let error=ref("");
    let load=async()=>{
        try{
            //fetch data in firebase
            let doc = await db.collection("movie-list").doc(id).get();
            movie.value = { id:doc.id, ...doc.data() };
        }catch(err){
            error.value=err.message;
        }
    }
    return {movie,error,load};
}
export default getMovie;