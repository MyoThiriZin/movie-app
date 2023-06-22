<template>
  <h1>All Genres</h1>
  <div class="flex">
    <div v-for="movie in movies" :key="movie.id" class="movie-cart">
      <SingleMovie :movie="movie"></SingleMovie>
      <!-- {{movie}} -->
    </div>
  </div>

  
</template>

<script>
import SingleMovie from './SingleMovie'
export default {
  components: { SingleMovie },
  props: ["movies"],
    setup(props){
        
    }
}
</script>

<style>

</style>