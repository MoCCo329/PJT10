<template>
  <div>
    <h1>My Movie List</h1>
    <div class="container list-box">
      <watch-list-form></watch-list-form>
      <watch-list-item></watch-list-item>
      <button type="button" class="btn btn-secondary mt-3" @click="clearAll">전체 삭제</button>
    </div>
  </div>
</template>

<script>
import WatchListForm from '../components/WatchListView/WatchListForm.vue'
import WatchListItem from '../components/WatchListView/WatchListItem.vue'
import {mapActions} from 'vuex'

export default {
  name: 'WatchListView',
  components: {
    WatchListForm,
    WatchListItem,
  },
  methods: {
    ...mapActions([
      'clearAll',
    ]),
  }
}
</script>

<style>
</style>