<template>
  <div class="tags-cloud">
    <h1>Tag Cloud</h1>
    <div v-for="genre in uniqueTag" :key="genre" class="tags">
      <router-link :to="{ name: 'Tag', params: { tag: tag } }">{{
        tag
      }}</router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["movies"],
  setup(props) {
    let genres = ref([]);
    props.movies.forEach((movie) => {
      // console.log(post)
      movie.genres.forEach((genre) => {
        console.log(genre)
        genre.value.push(genre);
      });
    });
    let uniqueTag = genres.value.filter((genre, index, array) => {
      return array.indexOf(genre) === index;
    });
    console.log(uniqueTag);
    return { uniqueTag };
  },
};
</script>

<style>
.tags-cloud a {
  color: #888;
  text-decoration: none;
}
.tags-cloud .tags {
  display: inline;
  margin-right: 20px;
}
.tags-cloud a.router-link-active {
  color: #333;
}
</style>