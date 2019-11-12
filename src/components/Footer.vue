<template>
  <div class="columns is-vcentered is-centered is-multiline">
    <div class="column is-8">
      <footer class="footer footer-vue is-size-6 is-size-5-desktop has-text-centered">
        <div class="contact">
          <a href="https://www.linkedin.com/in/isis-lazaro/" class="contact-icon">
            <span class="icon is-size-3">
              <i class="fab fa-linkedin"></i>
            </span>
          </a>
          <a href="https://github.com/isisLazaro/" class="contact-icon">
            <span class="icon is-size-3">
              <i class="fab fa-github-square"></i>
            </span>
          </a>
        </div>
        <p>
          Hecho con
          <a
            href="https://github.com/isisLazaro/isislazaro.github.io/tree/isis-dev"
          >&#128155</a>
        </p>
        <p>@2019</p>
      </footer>
    </div>
  </div>
</template>
<style scoped>
.footer-vue {
  position: relative;
  bottom: 0;
  background: none;
  padding: 3rem 1.2rem;
  /* left: 0;
  right: 0 */
  /* width: 100%; */
  /* background: cornflowerblue; */
}
.contact {
  padding: 0.8rem;
}

.contact-icon {
  padding: 0 0.8rem;
}
/* .footer-vue {
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
} */
</style>
