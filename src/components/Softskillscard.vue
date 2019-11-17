<template>
  <div class="box is-shadowless is-paddingless">
    <article class="media media-tool-card">
      <!-- <div class="media-left">
        <figure class="image is-32x32">
          <img :src="require(`../assets/icons/${tool.imgPath}`)" alt="Image" />
        </figure>
      </div>-->
      <div class="media-content">
        <div class="content">
          <p>{{ tool.name }}</p>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  props: {
    tool: Object
  }
};
</script>
<style scoped>
.media-tool-card {
  align-items: center;
}
</style>
