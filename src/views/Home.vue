<template>
  <section class="section">
    <div class="columns is-vcentered is-centered is-multiline">
      <!-- <div class="column is-full">
        <h2 class="title is-5 is-size-3-desktop">Acerca de mí</h2>
      </div>-->
      <!-- <div class="column is-5-tablet is-4-desktop">
        <Profilecard />
      </div>-->
      <div class="column is-8">
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
/* .section {
  padding: 2rem;
} */
.title:not(:last-child) {
  margin-bottom: 1rem;
}
</style>
