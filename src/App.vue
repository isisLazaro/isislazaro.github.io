<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>
<style>
/* @import "./assets/styles/debug.css"; */
#app {
  font-family: "Open Sans", sans-serif;
  /* padding: 0 1.5em; */
}

h1,
h2,
h3 {
  font-family: "Fugaz One", cursive;
}
</style>
