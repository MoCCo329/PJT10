<template>
  <div class="home">
    <h1 class="mt-3 mb-5">Home</h1>
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
