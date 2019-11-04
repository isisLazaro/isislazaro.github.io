<template>
  <section class="section">
    <div class="columns is-vcentered is-centered is-multiline">
      <div class="column is-full">
        <h2 class="title title is-5 is-size-4-desktop">Proyectos</h2>
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
  },
  data() {
    return {
      projects: [
        {
          name: "Proyecto 1",
          imgPath: "url",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Tincidunt dui ut ornare lectus sit amet est placerat."
        }
      ]
    };
  }
};
</script>
