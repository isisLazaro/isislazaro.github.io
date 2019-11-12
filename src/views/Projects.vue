<template>
  <section class="section">
    <div class="columns is-vcentered is-centered is-multiline">
      <div class="column is-8">
        <h3 class="is-size-4 is-size-2-desktop">Proyectos</h3>
        <!-- </div> -->
        <!-- <div class="column is-one-third"> -->
        <!-- <Underconstruction /> -->
        <Projectcard
          class="project-card"
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script>
// import Underconstruction from "@/components/Underconstruction.vue";
import Projectcard from "@/components/Projectcard.vue";
export default {
  components: {
    // Underconstruction,
    Projectcard
  },
  data() {
    return {
      projects: [
        {
          name: "Proyecto 1",
          imgPath: "data-lovers.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Tincidunt dui ut ornare lectus sit amet est placerat."
        },
        {
          name: "Proyecto 2",
          imgPath: "browserMockup.jpg",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          name: "Proyecto 3",
          imgPath: "browserMockup.jpg",
          description:
            "Pulvinar neque laoreet suspendisse interdum consectetur libero id. Bibendum enim facilisis gravida neque convallis. Nisl nunc mi ipsum faucibus vitae aliquet nec. "
        }
      ]
    };
  }
};
</script>

<style scoped>
.project-card {
  padding: 1.5rem 0;
}
</style>
