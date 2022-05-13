<template>
  <div>
    <h1 class="mb-5">Random</h1>
    <button class="btn btn-success" @click="getRandomMovie">PICK</button>
    <div class='d-flex justify-content-center'>
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="poster_path" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-text">{{ overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import axios from 'axios'

export default {
  name: "RandomView",
  data() {
    return {
      id: '',
      title: '',
      overview: '',
      poster_path: '',
    }
  },
  methods: {
    getRandomMovie() {
      //console.log(1)
      const API_URL = "https://api.themoviedb.org/3/movie/top_rated"
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
        const randomNumber = _.sample(_.range(0,20))
        let {id, title, overview, poster_path} = response.data.results[randomNumber]
        poster_path = "https://image.tmdb.org/t/p/w500" + poster_path
        this.id = id
        this.title = title
        this.overview = overview
        this.poster_path = poster_path
      })
    }
  },
  created() {
    this.getRandomMovie()
  }
}
</script>
<style>
.btn {
  margin-bottom: 1rem;
}
</style>