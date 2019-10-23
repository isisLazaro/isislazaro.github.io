<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <h2 class="title has-text-centered">Acerca de mí</h2>
        <Profilecard />
        <Aboutme />
      </div>
    </div>
  </section>
</template>
<script>
import Aboutme from "@/components/Aboutme.vue";
import Profilecard from "@/components/Profilecard.vue";

export default {
  components: {
    Aboutme,
    Profilecard
  }
};
</script>
<style scoped>
.section {
  padding: 1.5rem;
}
</style>
