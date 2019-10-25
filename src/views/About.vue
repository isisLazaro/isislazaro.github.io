<template>
  <section class="section">
    <div class="columns is-vcentered is-centered is-multiline">
      <div class="column is-full">
        <h2 class="title">Acerca de mí +</h2>
      </div>
      <div class="column is-8">
        <Aboutme />
      </div>
    </div>
  </section>
</template>
<script>
import Aboutme from "@/components/Aboutme.vue";
export default {
  components: {
    Aboutme
  }
};
</script>
