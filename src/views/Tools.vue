<template>
  <section class="section">
    <div class="columns is-vcentered is-centered is-multiline is-gapless">
      <div class="column is-8">
        <h3 class="is-size-4 is-size-2-desktop">Herramientas</h3>
      </div>
      <div class="column is-8">
        <h4 class="is-size-5 tools-subtitle is-size-3-desktop">
          Herramientas técnicas: desarrollo web
        </h4>
        <div class="columns is-multiline is-mobile tool-cards">
          <Toolcard
            class="column is-6-mobile is-4-tablet is-3-desktop"
            v-for="tool in tools"
            :key="tool.name"
            :tool="tool"
          />
        </div>
      </div>
      <div class="column is-8">
        <h4 class="is-size-5 tools-subtitle is-size-3-desktop">
          Herramientas técnicas: otras
        </h4>
        <div class="columns is-multiline is-mobile tool-cards">
          <Toolcard
            class="column is-6-mobile is-4-tablet is-3-desktop"
            v-for="tool in otherTools"
            :key="tool.name"
            :tool="tool"
          />
        </div>
      </div>
      <div class="column is-8">
        <h4 class="is-size-5 tools-subtitle is-size-3-desktop">Softskills</h4>
        <div class="columns is-multiline is-mobile tool-cards"></div>
        <Toolcard
          class="column is-6-mobile is-4-tablet is-3-desktop"
          v-for="skill in softskills"
          :key="skill.name"
          :skill="skill"
        />
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
          imgPath: "ionicons_svg_logo-html5.svg"
        },
        {
          name: "css",
          imgPath: "css3-fill.svg"
        },
        {
          name: "javascript",
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
        }
      ],
      otherTools: [
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
<style scoped>
.tool-cards {
  margin-left: -0.1rem;
}

.tools-subtitle {
  padding: 0.8rem 0 2rem;
}
</style>
