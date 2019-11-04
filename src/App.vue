<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
<style>
/* @import "./assets/debug.css"; */

#app {
  font-family: "Open Sans", sans-serif;
  /* font-weight: 600; */
  /* padding: 0 1.5em; */
  padding: 0 2rem;
}

h1,
h2 {
  font-family: "Fugaz One", cursive;
}

@media screen and (max-width: 370px) {
  #app {
    padding: 0 0.85rem;
  }
}
</style>
