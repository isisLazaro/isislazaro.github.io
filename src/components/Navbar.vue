<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link :to="{ name: 'home' }" id="logoLink" class="navbar-item">
        <h1 class="title">Isis Lázaro</h1>
        <h2 class="subtitle is-6">desarrolladora front-end</h2>
      </router-link>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navMenu"
        @click="showNav = !showNav"
        :class="{ 'is-active': showNav }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navMenu" class="navbar-menu" :class="{ 'is-active': showNav }">
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
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showNav: false
    };
  }
};
</script>

<style scoped>
.navbar {
  background: #cc1994;
  /* margin: 0 3em; */
}
#logoLink {
  display: block;
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
