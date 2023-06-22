<template>
  {{movie.title}}
</template>

<script>
import getMovie from '@/composable/getMovie'
export default {
    // props: [movies]
    setup(){
        let {movie,error,load}= getMovie();
        load();

        return {movie,error}
    }
}
</script>

<style>

</style>