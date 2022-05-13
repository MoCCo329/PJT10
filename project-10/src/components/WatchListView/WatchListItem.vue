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
          <i class="fa-brands fa-youtube fa-xl text-danger me-1 pointer" @click="[playYoutube(),changeMovieName(watch)]" ></i>
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
import {mapActions} from 'vuex'
import axios from 'axios'

const API_URL = 'https://www.googleapis.com/youtube/v3/search'
// const API_KEY = 'AIzaSyAjIWby-7t46kFX4_r7h3_NXZriAozsj0c'
const API_KEY = 'AIzaSyBUE0lDzWu_fkgsFVKBgqY-GjRrmN5ixwM'

export default {
  computed: {
    watchList() {
      return this.$store.state.watchList
    },
    videoURI() {
      return `https://www.youtube.com/embed/${this.$store.state.videoId}`
    },
    movieName() {
      return this.$store.state.movieName
    }
  },
  data(){
    return {
      // movieName: this.$store.state.movieName,
      // videoId: '',
      //movieURI: '',
      // videoURI: `https://www.youtube.com/embed/${this.$store.state.videoId}`,
    }
  },
  methods: {
    ...mapActions([
      'deleteMovie',
      'changeMovieName',
    ]),
    playYoutube () {
      axios({
        method: 'get',
        url: API_URL,
        params: {
          part: 'snippet',
          type: 'video',
          key: API_KEY,
          q: `영화 ${this.$store.state.movieName} 예고편`,
          maxResults: 1
        }
      })
      .then(res => {
        console.log(res.data.items)
        console.log(res.data.items[0].id.videoId)
        let videoId = res.data.items[0].id.videoId
        this.$store.dispatch('changeVideoId', videoId)
        // const videoId = res.data.items[0].id.videoId
        // this.movieURI = `https://www.youtube.com/embed/${videoId}`
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