<template>
  <Navbar></Navbar>
  <div class="home">
    <ShowAllGenre :movies="movies"></ShowAllGenre>



  </div>
</template>

<script>
import Genre from './Genre'
import Navbar from "../components/Navbar";
import ShowAllGenre from "../components/ShowAllGenre";
import getMovies from "../composable/getMovies";
import getUser from "../composable/getUser";
import { useRouter } from "vue-router";
import { computed, watch } from "vue";

export default {
  components: {
    Genre,
    Navbar,
    ShowAllGenre,
  },
  props: ['genre'],
  setup(props) {
    let { movies, error, load } = getMovies();

    load();

    let { user } = getUser();
    let router = useRouter();
    watch(user, () => {
      if (!user.value) {
        // redirect welcome
        router.push({ name: "welcome" });
      }
    });

    let filteredMovie=computed(()=>{
            return movies.value.filter((movie)=>{
                return movie.genres.includes(props.genre)
            })
        })

    return { movies, error ,filteredMovie };
  },
};
</script>
