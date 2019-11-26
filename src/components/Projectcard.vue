<template>
  <div class="columns is-tablet">
    <div class="column is-half">
      <figure class="image">
        <img
          :src="require(`../assets/prjctImgs/${project.imgPath}`)"
          alt="Image"
        />
      </figure>
    </div>
    <div class="column is-half">
      <h3 class="is-size-5 is-size-4-desktop project-title">
        {{ project.name }}
      </h3>
      <p>{{ project.description }}</p>
      <!-- <a :href="project.pathNameRepo">github</a> -->
      <a :href="`https://github.com/isisLazaro/${project.pathNameRepo}`"
        >github</a
      >
      <a href="">website</a>
      <!-- <button class="button" type="submit" disabled>
        <span class="icon">
          <i class="fab fa-github"></i>
        </span>
        <span>GitHub</span>
      </button> -->
      <!-- <button class="button" disabled>
        <span class="icon">
          <i class="fas fa-link"></i>
        </span>
        <span>Ver</span>
      </button>-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  }
};
</script>
<style scoped>
.project-title {
  color: #410e85;
}
</style>
