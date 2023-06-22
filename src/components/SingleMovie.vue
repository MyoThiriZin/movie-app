<template>
<router-link :to="{name: 'detail', params:{id:movie.id} }">
    <div>
      <!-- <img :src="imgFetch" :alt="movie.title" /> -->
      <ShowImage :movie="movie"></ShowImage>
      <h3>{{ movie.title }}</h3>
      <p>{{ movie.genres }}</p>
    </div>
</router-link>

</template>

<script>
import ShowImage from './ShowImage'


export default {
  components: { ShowImage },
  props: ["movie"],
  setup(props) {
   
        

  },
};
</script>

<style>
</style>