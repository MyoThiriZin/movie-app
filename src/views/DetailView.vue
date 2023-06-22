<template>
<!-- <Navbar></Navbar> -->
<div v-if="user">
  <div v-if="user.email==='test@gmail.com'">
<button @click="deletePost">Delete</button>
<button @click="editPost">Edit</button>
</div>
</div>
  <div class="detail" v-if="movie">
    <h2>{{movie.title}}</h2>
    <p>{{movie.genres}}</p>
    <div class="flex">
      <ShowImage :movie="movie" class="image"></ShowImage>
      <div class="desc">
        <p>{{movie.desc}}</p>
      </div>
    </div>

  </div>
</template>

<script>
// import Navbar from '../components/Navbar'
import ShowImage from '../components/ShowImage'
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import getMovie from "../composable/getMovie";
import UseUser from '../composable/getUser'
import { db } from '@/firebase/config';


export default {
  components: {
    // Navbar,
     ShowImage },
  props: ['id'],
  setup(props) {
    let route = useRoute();
    let router = useRouter();
    let { movie, error, load } = getMovie(route.params.id);
    load();

    let {user} = UseUser();

    //delete in firebase
        let deletePost= async()=> {
          let id=props.id;
          await db.collection("movie-list").doc(id).delete();
          router.push('/view');
        }

        let editPost= ()=>{
          router.push({name: 'edit', params:{id:movie.id}} )
        }

    return { movie, error, user, deletePost, editPost };
  },
};
</script>
