import { ref } from "vue";
import { useRouter } from "vue-router";
import { db, timestamp, storage } from "../firebase/config";
import { getStorage, ref as storageRef, uploadBytes } from "firebase/storage";

let getImage=()=>{
    const imgFetch = ref("");
    const imageRef = storage.ref("images/"+props.movie.img);
    // Fetch the image
    imageRef
      .getDownloadURL()
      .then((url) => {
        // Use the fetched URL to display or process the image
        console.log(url);
        imgFetch.value=url
        
      })
      .catch((error) => {
        // Handle any errors that occur during the fetching process
        console.error("Error fetching image:", error);
      });
      

      return {imageRef,imgFetch,load}
}
export default getImage;