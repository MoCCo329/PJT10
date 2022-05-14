<template>
  <div>
    <div id="area">
      <iframe width="600" height="450" :src="videoURI" frameborder="0"></iframe>
    </div>
    <div
    v-for="watch in watchList"
    :key="watch"
    >
      
      <div class="my-3 d-flex justify-content-between px-2 width">
        <div>
          <i class="fa-brands fa-youtube fa-xl text-danger me-1 pointer" @click="playYoutube(watch)"></i>
          <span> {{ watch }} </span>
        </div>
        <div>
          <i class="fa-solid fa-trash-can fa-lg" @click="deleteMovie(watch)"></i>
        </div>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'

const API_URL = 'https://www.googleapis.com/youtube/v3/search'
// const API_KEY = 'AIzaSyAjIWby-7t46kFX4_r7h3_NXZriAozsj0c'
// const API_KEY = 'AIzaSyBUE0lDzWu_fkgsFVKBgqY-GjRrmN5ixwM'
const API_KEY = 'AIzaSyAzeA1ezh2hKCQVRkPLx1GNEBmbblnJZFE'

export default {
  computed: {
    watchList() {
      return this.$store.state.watchList
    },
    movieName() {
      return this.$store.state.movieName
    }
  },
  data(){
    return {
      videoURI: ''
    }
  },
  methods: {
    ...mapActions([
      'deleteMovie',
    ]),
    playYoutube (watch) {
      axios({
        method: 'get',
        url: API_URL,
        params: {
          part: 'snippet',
          type: 'video',
          key: API_KEY,
          q: `영화 ${watch} 예고편`,
          maxResults: 1
        }
      })
      .then(res => {
        let videoId = res.data.items[0].id.videoId
        // this.$store.dispatch('changeVideoId', videoId)
        this.videoURI = `https://www.youtube.com/embed/${videoId}`
      })
      .catch(err => console.log(err))
    }
  },
}
</script>

<style>
.pointer {
  cursor: grab;
}
</style>