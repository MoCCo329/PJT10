<template>
  <div class="container">
    <div class="row">
      <div class="d-flex justify-content-center col-12 col-md-6 col-lg-4 col-xl-3" v-for='movie in movies' :key="movie.id">
        <div class="card mb-3" style="width: 18rem;">
          <img class="card-img-top" :src="movie.poster_path" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.overview }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'MovieCard',
  computed: {
    movies() {
      return this.$store.state.movies
    }
  },
  methods: {
    // 1. URL 받아와서 res console켜서 확인한다음에
    // 2. data에서 선택적으로 index.js에 state에 원하는 속성 만들어 놓고 할당하는식
    getMovies () {
      const API_URL = "https://api.themoviedb.org/3/movie/popular"
      //const API_KEY = "60c57f5c969ec33c111d3b4218df373b"
      const API_KEY = "1c495200bf8a0c1956a9c60b7877da9c"
      axios({
        method: 'get',
        url: API_URL,
        params: {
          // region: 'KR',
          // language: 'ko',
          api_key: API_KEY,
        }
      })
      .then(response => {
        // console.log(response)
        // state에 20개온거 저장하고
        const movies = response.data.results
        const movieList = movies.map(function (res) {
          const {id, title, overview} = res
          return {
            id,
            title,
            overview,
            poster_path : "https://image.tmdb.org/t/p/w500" + res.poster_path
          }
        })
        //console.log(movieList)
        this.$store.dispatch('createMovieList', movieList)
      })
    }
  },
  created() {
   this.getMovies()
  }
}
</script>

<style>

</style>