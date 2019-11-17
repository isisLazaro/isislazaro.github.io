<template>
  <nav class="navbar is-spaced navbar-vue">
    <div class="navbar-brand">
      <div class="navbar-item has-text-centered center-h">
        <router-link :to="{ name: 'home' }" id="logoLink">
          <h1 class="title is-2 title-logo">Isis Lázaro</h1>
          <h2 class="subtitle is-5 subtitle-logo">desarrolladora web</h2>
        </router-link>
      </div>
    </div>
    <div class="navbar-end is-size-4-tablet is-size-5 is-flex-mobile">
      <div class="navbar-item">
        <router-link :to="{ name: 'proyectos' }">Proyectos</router-link>
      </div>
      <div class="navbar-item">
        <router-link :to="{ name: 'herramientas' }">Herramientas</router-link>
      </div>
      <!-- <div class="navbar-item">
        <router-link :to="{ name: 'about' }">Acerca de mí</router-link>
      </div>-->
    </div>
  </nav>
</template>

<style scoped>
/* .navbar-vue {
  margin: 0 7rem;
} */
.is-flex-mobile {
  justify-content: center;
}

.center-h {
  margin: 0 auto;
  padding: 0.5rem 0rem;
}

/* #logoLink {
  display: block;
} */

.title-logo {
  font-family: "Fugaz One", cursive;
  font-size: 2rem;
  /* color: #c8257d; */
  /* color: #8c489f; */
  color: #6c08e7;

  /* letter-spacing: 0.1rem; */
  /* color: thistle; */
}

.subtitle-logo {
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  font-weight: bold;
  color: #21123b;
  /* color: mintcream; */
}

.navbar-end {
  align-items: end;
  /* font-size: 1rem; */
}

.navbar-item {
  font-family: "Fugaz One", cursive;
  font-weight: lighter;
  /* color: mintcream; */
}

/* @media screen and (min-width: 410px) and (max-width: 464px) {
  .navbar-end {
    font-size: 1rem;
  }
}

@media screen and (min-width: 465px) and (max-width: 575px) {
  .navbar-end {
    font-size: 1.2rem;
  }
}

@media screen and (min-width: 576px) and (max-width: 768px) {
  .navbar-end {
    font-size: 1rem;
  }
}*/

/* @media screen and (min-width: 768px) {
  .navbar-end {
    font-size: 1.3rem;
  }
} */
</style>
