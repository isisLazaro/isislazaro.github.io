<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <div class="navbar-item center-h">
        <router-link :to="{ name: 'home' }" id="logoLink">
          <h1 class="title title-logo">Isis Lázaro</h1>
          <h2 class="subtitle is-6 subtitle-logo">desarrolladora web</h2>
        </router-link>
      </div>
    </div>
    <div
      class="navbar-end is-size-4 is-flex-mobile is-size-7-mobile has-text-weight-light-mobile"
    >
      <div class="navbar-item">
        <router-link :to="{ name: 'proyectos' }">Proyectos</router-link>
      </div>
      <div class="navbar-item">
        <router-link :to="{ name: 'herramientas' }">Herramientas</router-link>
      </div>
      <div class="navbar-item">
        <router-link :to="{ name: 'about' }">Acerca de mí</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
/* .navbar { */
/* background: #cc1994; */
/* height: 3.5rem; */
/* margin: 0 3em; */
/* } */
.is-flex-mobile {
  justify-content: center;
}
.center-h {
  margin: 0 auto;
}

#logoLink {
  display: block;
}

.title-logo {
  font-family: "Fugaz One", cursive;
  font-size: 1.7rem;
  /* letter-spacing: 0.1rem; */
  /* color: thistle; */
}
.subtitle-logo {
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  font-weight: bold;
  /* color: mintcream; */
}
.navbar-item {
  font-family: "Fugaz One", cursive;
  font-weight: lighter;
  /* color: mintcream; */
}
</style>
