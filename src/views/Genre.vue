<template>
  <GenreCloud :movies="movies"></GenreCloud>
      <ShowAllGenre :movies="filteredMovie"></ShowAllGenre>
</template>

<script>
import ShowAllGenre from '../components/ShowAllGenre'
import getMovies from '@/composable/getMovies';
import GenreCloud from '../components/GenreCloud'
import { computed } from 'vue';
export default {
    props: ['genre'],
    components: {
    ShowAllGenre, GenreCloud },
    setup(props){
        let {movies,error,load} =getMovies();
        load();

        console.log(props.genre)

            let filteredMovie=computed(()=>{
            return movies.value.filter((movies)=>{
                return movies.genres.includes(props.genre)
            })
        })
        return {movies,error,filteredMovie}
    }
}
</script>

<style>

</style>