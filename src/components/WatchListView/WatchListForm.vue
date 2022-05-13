<template>
  <div class="d-flex justify-content-center my-5">
    <div class="input-group flex-nowrap">
      <span class="input-group-text bg-success text-white" id="addon-wrapping">↪</span>
        <input 
        type="text" 
        class="form-control"
        placeholder="보고 싶은 영화를 입력해주세요"
        aria-describedby="addon-wrapping"
        v-model.trim="newWatch"
        @keyup.enter="createWatchList">
        <button class="btn btn-success m-0" @click="createWatchList">Add</button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      newWatch: ''
    }
  },
  methods: {
    createWatchList () {
      const isContained = this.$store.state.watchList.every(watchMovie => {
        return !(this.newWatch === '' || watchMovie === this.newWatch)
      })
      if (!isContained) {
        alert('이미 입력된 영화입니다.')
      } else {
        this.$store.dispatch('createWatchList', this.newWatch)
        this.newWatch = ''
      }
    }
  },
}
</script>

<style>

</style>