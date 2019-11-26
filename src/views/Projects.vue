<template>
  <section class="section">
    <div class="columns is-vcentered is-centered is-multiline is-mobile">
      <div class="column is-full-mobile is-9-tablet is-8-desktop">
        <h3
          class="is-size-4 is-size-2-desktop has-text-weight-bold projects-title"
        >
          Proyectos
        </h3>
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
          name: "Data Lovers: Rick and Morty API",
          imgPath: "data-lovers.png",
          description:
            "Interfaz para visualizar datos consumidos de una API de forma dinámica.",
          pathNameRepo: "dataLovers_v2",
          path: "https://isislazaro.github.io/dataLovers_v2/src/"
        },
        {
          name: "+Gas",
          imgPath: "masGas.png",
          description:
            "Aplicación para ubicar gasolineras cercanas a la localización del usuario o a un punto que se indique. Se desarrolló en equipo integrado por desarrolladoras FE yUX, durante un hackaton interno de Laboratoria de dos días. ",
          pathNameRepo: "app-mockhackaton",
          path: "https://isislazaro.github.io/app-mockhackaton/"
        },
        {
          name: "Bye Spoilers!",
          imgPath: "byeSpolers.png",
          description:
            "Aplicación web para que el usuario pueda cifrar y descifrar un texto, indicando un desplazamiento específico de caracteres (offset) utilizando un alfabeto simple. ",
          pathNameRepo: "MEX-008-Cipher",
          path: "https://isislazaro.github.io/MEX-008-Cipher/src/"
        }
      ]
    };
  }
};
</script>

<style scoped>
.projects-title {
  color: #410e85;
}
.project-card {
  padding: 1.5rem 0;
}
</style>
