import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    movies: [],
    watchList: [],
    movieName: '',
    videoId: '',
  },
  getters: {
  },
  mutations: {
    CREATE_MOVIE_LIST (state, movieList) {
      state.movies = movieList
    },
    CREATE_WATCH_LIST (state, watchList) {
      state.watchList.push(watchList)
    },
    DELETE_MOVIE (state, watch) {
      const index = state.watchList.indexOf(watch)
      state.watchList.splice(index, 1)
    },
    CLEAR_ALL (state) {
      state.watchList.splice(0,state.watchList.length)
    },
    CHANGE_MOVIE_NAME (state, watch) {
      state.movieName = watch
    },
    CHANGE_VIDEO_ID (state, videoId) {
      state.videoId = videoId
    }
  },
  actions: {
    createMovieList (context, movieList) {
      context.commit('CREATE_MOVIE_LIST', movieList)
    },
    createWatchList (context, watchList) {
      context.commit('CREATE_WATCH_LIST', watchList)
    },
    deleteMovie (context, watch) {
      context.commit('DELETE_MOVIE', watch)
    },
    clearAll (context) {
      context.commit('CLEAR_ALL')
    },
    changeMovieName (context, watch) {
      console.log(watch)
      context.commit('CHANGE_MOVIE_NAME', watch)
    },
    changeVideoId (context, videoId) {
      context.commit('CHANGE_VIDEO_ID', videoId)
    }
  },
  modules: {
  }
})
