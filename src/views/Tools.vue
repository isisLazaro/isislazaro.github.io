<template>
  <section class="section">
    <div class="columns is-multiline is-gapless">
      <div class="column is-full">
        <h2 class="title is-5 is-size-4-desktop">Herramientas</h2>
      </div>
      <div class="column is-full">
        <br />
        <h3>Herramientas Técnicas</h3>
      </div>
    </div>
    <div class="columns">
      <Toolcard
        class="column is-3"
        v-for="tool in tools.slice(0, 4)"
        :key="tool.name"
        :tool="tool"
      />
    </div>
    <div class="columns">
      <Toolcard
        class="column is-3"
        v-for="tool in tools.slice(4, 6)"
        :key="tool.name"
        :tool="tool"
      />
    </div>
    <div class="columns">
      <Toolcard
        class="column is-3"
        v-for="tool in tools.slice(6, 8)"
        :key="tool.name"
        :tool="tool"
      />
    </div>
    <div class="columns">
      <Toolcard
        class="column is-3"
        v-for="tool in tools.slice(8, 10)"
        :key="tool.name"
        :tool="tool"
      />
    </div>
    <div class="columns">
      <h3>Softskills</h3>
    </div>
    <!-- <div class="column is-full">
        
        
      </div>
    </div>-->
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
          imgPath: "ionicons_svg_logo-html5.svg"
        },
        {
          name: "css",
          imgPath: "css3-fill.svg"
        },
        {
          name: "java script",
          imgPath: "bxl-javascript.svg"
        },
        {
          name: "vue.js",
          imgPath: "vuejs-fill.svg"
        },
        {
          name: "git",
          imgPath: "bxl-git.svg"
        },
        {
          name: "github",
          imgPath: "iconmonstr-github-1.svg"
        },
        {
          name: "firebase",
          imgPath: "firebase.svg"
        },
        {
          name: "node.js",
          imgPath: "bxl-nodejs.svg"
        },
        {
          name: "npm"
        },
        {
          name: "bulma"
        },
        {
          name: "jest"
        },
        {
          name: "arduino",
          imgPath: "arduino.svg"
        },
        {
          name: "matlab",
          imgPath: "mathworks.svg"
        }
      ],
      softskills: [
        {
          name: "agile"
        },
        {
          name: "trabajo en equipo"
        },
        {
          name: "autoaprendizaje"
        },
        {
          name: "grow mindset"
        },
        {
          name: "adaptabilidad"
        },
        {
          name: "feedback"
        }
      ]
    };
  }
};
</script>
