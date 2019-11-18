<template>
  <nav class="navbar is-spaced">
    <div class="navbar-brand">
      <div class="navbar-item has-text-centered navbar-item-logo center-h">
        <router-link :to="{ name: 'home' }" id="logoLink">
          <h1 class="is-size-3 is-size-2-desktop title-logo">Isis Lázaro</h1>
          <h2 class="is-size-6 is-size-5-desktop subtitle-logo">
            desarrolladora web
          </h2>
        </router-link>
      </div>
    </div>
    <div
      class="navbar-end is-size-4-desktop is-size-5 is-flex navbar-end-items"
    >
      <div class="navbar-item">
        <router-link
          :to="{ name: 'proyectos' }"
          class="has-text-weight-bold navbar-item-router"
          >Proyectos</router-link
        >
      </div>
      <div class="navbar-item">
        <router-link
          :to="{ name: 'herramientas' }"
          class="has-text-weight-bold navbar-item-router"
          >Herramientas</router-link
        >
      </div>
      <!-- <div class="navbar-item">
        <router-link :to="{ name: 'about' }">Acerca de mí</router-link>
      </div>-->
    </div>
  </nav>
</template>

<style scoped>
.navbar-item-logo {
  font-family: "Fugaz One", cursive;
  font-weight: lighter;
  /* color: mintcream; */
}

.center-h {
  margin: 0 auto;
  padding: 0.5rem 0rem;
}

.title-logo {
  font-family: "Fugaz One", cursive;
  font-size: 2rem;
  color: #6c08e7;

  /* letter-spacing: 0.1rem; */
  /* color: thistle; */
}

.subtitle-logo {
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  font-weight: bold;
  /* color: #21123b; */
  color: #410e85;
}

.navbar.is-spaced .navbar-end {
  align-items: end;
}

.navbar-end-items {
  /* align-items: end; */
  justify-content: center;
}

.navbar-item-router {
  color: #410e85;
}

/* .navbar-end .navbar-item {
  align-items: end; */
/* font-size: 1rem; */
/* } */

/* .is-flex-mobile {
  justify-content: first baseline;
} */

/* .navbar-vue {
  margin: 0 7rem;
} */

/* #logoLink {
  display: block;
} */

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
