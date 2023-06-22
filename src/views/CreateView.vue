<template>
  <h1>Create Movie to post</h1>

  <form @submit.prevent="addPost">
    <label class="yellow-ttl">Movie Title</label>
    <input type="text" required v-model="title" />

    <label class="yellow-ttl">Description</label>
    <textarea required v-model="desc" class="desc-box"></textarea>

    <label class="yellow-ttl">Genres(hit enter to add post)</label>
    <input type="text" v-model="genre" @keydown.enter.prevent="handleKeyDown" />
    {{ genres }}

    <input type="file" @change="imgUpload" ref="img1"/>
    <!-- <img :src="imgURL" alt="Uploaded Image"> -->

    <button>Add Movie</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { db, timestamp,storage } from "../firebase/config";
import { getStorage, ref as storageRef, uploadBytes } from "firebase/storage";
export default {
  setup() {
    let router = useRouter();

    let title = ref("");
    let desc = ref("");
    let genre = ref("");
    let genres = ref([]);

    let img = ref(null);
    let imgURL = ref("");

    let handleKeyDown = () => {
      if (!genres.value.includes(genre.value)) {
        genres.value.push(genre.value);
      }
      genre.value = "";
    };

    let imgUpload = (event) => {
      const file = event.target.files[0];
      img.value = file;
      imgURL.value = URL.createObjectURL(file);
    };

    let addPost = async () => {
      try {
        let file = img.value;

        // let storage = getStorage();
        let storageRef = storage.ref('images/'+file.name);
        await uploadBytes(storageRef,file);

        console.log(storageRef.fullPath)

       
        // await uploadBytes(imageRef, file);

        console.log("Image uploaded successfully!");
      } catch (error) {
        console.log("Error uploading image:", error);
      }

      let movie = {
        title: title.value,
        desc: desc.value,
        genres: genres.value,
        created_at: timestamp(),
        img: img.value.name,
      };
      await db.collection("movie-list").add(movie);
      router.push("/view");
    };

    img = ref(null);

    return { handleKeyDown, addPost, imgUpload, title, desc, genres, genre };
  },
};
</script>

<style>
form {
  width: 50%;
  margin: 0 auto;
}
label {
  display: block;
}
input,
textarea {
  width: 100%;
  padding: 10px 5px;
  margin-bottom: 20px;
}
button {
  display: block;
  margin-left: auto;
}
</style>