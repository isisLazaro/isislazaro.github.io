<template>
  <div class="columns is-tablet">
    <div class="column is-two-fifths">
      <figure class="image">
        <img
          :src="require(`../assets/prjctImgs/${project.imgPath}`)"
          alt="Image"
        />
      </figure>
    </div>
    <div class="column is-three-fifths">
      <h3>{{ project.name }}</h3>

      <p>{{ project.description }}</p>
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
