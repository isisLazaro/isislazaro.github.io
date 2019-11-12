<template>
  <footer class="footer footer-vue">
    <p class="footer-first-paragraph">
      Hecho con
      <a href="https://github.com/isisLazaro/isislazaro.github.io/tree/isis-dev">&#128155</a>
    </p>
    <p>@2019</p>
  </footer>
</template>
<style scoped>
.footer-vue {
  padding: 3rem 1.5rem;
  font-size: 0.9em;
  position: relative;
  background: #e6e6e6;
}
@media screen and (min-width: 768px) {
  .footer-vue {
    padding: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
