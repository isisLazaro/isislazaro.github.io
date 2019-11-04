<template>
  <div class="card is-shadowless">
    <div class="card-image has-text-centered">
      <img src="../assets/taxi-2.png" alt="profile picture" />
    </div>
    <div class="card-content has-text-centered">
      <a href="https://www.linkedin.com/in/isis-lazaro/">
        <span class="icon is-medium is-size-4">
          <i class="fab fa-linkedin"></i>
        </span>
      </a>
      <a href="https://github.com/isisLazaro/">
        <span class="icon is-medium is-size-4">
          <i class="fab fa-github-square"></i>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profilecard"
};
</script>

<style>
.card-image {
  max-width: 60%;
  margin: 0 auto;
}

.card-content {
  padding: 1rem;
}

a {
  padding: 0 0.25rem;
}

@media screen and (min-width: 465px) and (max-width: 575px) {
  .card-image {
    max-width: 50%;
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .card-image {
    max-width: 40%;
  }
}
</style>
