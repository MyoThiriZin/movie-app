import { ref } from 'vue';
import {db,timestamp} from '../firebase/config'
let getMovies=()=>{
    let movies=ref([]);
      let error=ref("");

      let load=async()=>{
        try{
          // fatch with firebase 
          let res = await db.collection("movie-list").orderBy("title","desc").get();
          movies.value = res.docs.map((doc)=>{
            return { id:doc.id, ...doc.data() }
          });

        }catch(err){
          error.value=err.message;
        }
      }
      return {movies,error,load};
}
export default getMovies;