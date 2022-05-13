<template>
  <div class="home">
    <h1 class="my-5">Home</h1>
    <movie-card></movie-card>
  </div>
</template>

<script>
import MovieCard from '../components/HomeView/MovieCard.vue'

export default {
  name: 'HomeView',
  components: {
    MovieCard
  }
}
</script>
