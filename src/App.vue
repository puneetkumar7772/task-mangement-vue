<template>
  <div class="app">
    <AppNavbar />
    <div class="content-area">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'

export default {
  name: 'App',
  components: {
    AppNavbar
  }
}
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content-area {
  flex-grow: 1;
   background-color: #2c3e50;
  padding: 20px;
}
</style>
