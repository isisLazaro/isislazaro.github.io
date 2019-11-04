<template>
  <div class="box is-shadowless is-paddingless">
    <article class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <!-- <img src="@/assets/icons/_ionicons_svg_logo-html5.svg" alt="Image" /> -->
          <!-- <img :src="tool.imgPath" alt="Image" /> -->
          <img :src="require(`../assets/icons/${tool.imgPath}`)" alt="Image" />
        </figure>
      </div>
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
.media {
  align-items: center;
}
</style>
