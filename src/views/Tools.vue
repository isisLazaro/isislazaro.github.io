<template>
  <section class="section">
    <div class="columns is-vcentered is-centered is-multiline">
      <div class="column is-full">
        <h2 class="title is-5 is-size-4-desktop">Herramientas</h2>
      </div>
      <div class="column is-one-third">
        <!-- <Underconstruction /> -->
        <Toolcard v-for="tool in tools" :key="tool.name" :tool="tool" />
      </div>
    </div>
  </section>
</template>

<script>
// import Underconstruction from "@/components/Underconstruction.vue";
import Toolcard from "@/components/Toolcard.vue";
export default {
  components: {
    // Underconstruction,
    Toolcard
  },
  data() {
    return {
      tools: [
        {
          name: "html",
          imgPath: "_ionicons_svg_logo-html5.svg"
        },
        {
          name: "css",
          imgPath: "css3-fill.svg"
        },
        {
          name: "js",
          imgPath: "bxl-javascript.svg"
        }
      ]
    };
  }
};
</script>
