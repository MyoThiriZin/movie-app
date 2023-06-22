<template>
    <div>
      <img :src="imgFetch" :alt="movie.title" />
    </div>

</template>

<script>
import { ref } from "vue";
import { db, timestamp, storage } from "../firebase/config";

export default {
  props: ["movie"],
  setup(props) {
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
      

      return {imageRef,imgFetch}
  },
};
</script>

<style>
</style>