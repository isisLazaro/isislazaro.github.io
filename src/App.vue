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
/* @import "./assets/debug.css"; */
#app {
  font-family: "Open Sans", sans-serif;
  /* font-weight: 600; */
  /* padding: 0 1.5em; */
}

h1,
h2,
h3 {
  font-family: "Fugaz One", cursive;
}
</style>
