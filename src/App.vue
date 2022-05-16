<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">DH96s</a>
      <ul class="nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <router-link class='nav-link text-success' to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class='nav-link text-success' :to=" {name : 'random' } ">Random</router-link>
        </li>
        <li class="nav-item">
          <router-link class='nav-link text-success' :to=" {name : 'watch-list' } ">WatchListView</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  padding: 30px;
  margin-bottom: 1.5rem;
}
</style>
