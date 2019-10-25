<template>
  <section class="section">
    <div class="columns is-vcentered is-centered is-multiline">
      <div class="column is-full">
        <h2 class="title">En construcción ...</h2>
      </div>
      <div class="column is-one-third">
        <Underconstruction />
      </div>
    </div>
  </section>
</template>

<script>
import Underconstruction from "@/components/Underconstruction.vue";
export default {
  components: {
    Underconstruction
  }
};
</script>
