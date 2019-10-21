<template>
  <nav class="navbar">
    <router-link :to="{ name: 'home' }">
      <h1 class="title">Isis Lázaro</h1>
      <h2 class="subtitle is-6">desarrolladora front-end</h2>
    </router-link>
    <div class="navbar-end">
      <router-link class="navbar-item" :to="{ name: 'proyectos' }"
        >Proyectos</router-link
      >
      <router-link class="navbar-item" :to="{ name: 'habilidades' }"
        >Herramientas</router-link
      >
      <router-link class="navbar-item" :to="{ name: 'about' }"
        >Acerca de mí</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar {
  background: #cc1994;
  margin: 0 3em;
}
.title {
  font-family: "Fugaz One", cursive;
  letter-spacing: 0.1rem;
  color: thistle;
}
.subtitle {
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  font-weight: bold;
  color: mintcream;
}
.navbar-item {
  font-family: "Fugaz One", cursive;
  color: mintcream;
}
</style>
