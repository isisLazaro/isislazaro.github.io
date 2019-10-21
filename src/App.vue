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
#app {
  font-family: "Open Sans", sans-serif;
}

h1,
h2,
h3 {
  font-family: "Fugaz One", cursive;
}
</style>
