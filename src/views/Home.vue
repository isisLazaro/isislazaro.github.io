<template>
  <section class="section">
    <div class="columns is-vcentered is-centered is-multiline">
      <div class="column is-8">
        <h3 class="is-size-3 first-part is-size-1-desktop">¡Hola!</h3>
        <p class="is-size-4 first-part is-size-2-desktop">
          Me llamo Isis y soy desarrolladora web en CDMX.
        </p>
        <p class="is-size-4 first-part is-size-2-desktop">
          Me encanta convertir ideas en código, programar y crear aplicaciones
          💡⚙️👩🏽‍💻.
        </p>
        <p class="is-size-5 second-part is-size-3-desktop">
          Siempre aprendiendo 🙋🏽‍♀️📚.
        </p>
        <p class="is-size-5 is-size-3-desktop">
          Te invito a que conozcas algunos de los
          <router-link :to="{ name: 'proyectos' }">proyectos&nbsp;</router-link
          >en los que he trabajado y las
          <router-link :to="{ name: 'herramientas' }"
            >herramientas&nbsp;</router-link
          >que he utilizado.
        </p>
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
.first-part {
  position: static;
  padding: 0.25rem 0;
}

.second-part {
  position: static;
  padding: 3rem 0 3.2rem;
}
/* .first-paragraph:first-letter {
  font-size: 150%;
} */
/* .first-paragraph {
  line-height: 1.8;
} */
/* .title:not(:last-child) {
  margin-bottom: 1rem;
} */
</style>
