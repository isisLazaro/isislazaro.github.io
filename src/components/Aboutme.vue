<template>
  <div class="container">
    <p class="is-size-6-mobile is-size-5">
      <strong>¡Hola!</strong>
      <br />
      <br />Me llamo Isis y soy desarrolladora web en CDMX. Me encanta convertir
      ideas en código, programar y crear aplicaciones.
      <br />
      <br />Siempre aprendiendo.
      <br />
      <br />Te invito a que conozcas algunos de los
      <router-link :to="{ name: 'proyectos' }">proyectos&nbsp;</router-link>en
      los que he trabajado y las
      <router-link :to="{ name: 'herramientas' }"
        >herramientas&nbsp;</router-link
      >que he utilizado.
    </p>
  </div>
</template>

<script>
export default {
  name: "Aboutme"
};
</script>

<style scoped>
.subtitle {
  /* font-size: 1rem; */
  line-height: 1.5rem;
}
</style>
