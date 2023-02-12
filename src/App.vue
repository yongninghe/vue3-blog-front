<template>
  <nav>
    <router-link to="/">博客|</router-link>
    <router-link to="/about">关于我</router-link>
  </nav>
  <div class="container">
    <div class="row">
      <router-view/>
    </div>
  </div>
  <FooterView></FooterView>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup lang="ts">
import FooterView from "@/views/FooterView.vue";
</script>
