<template>
  <section class="section">
    <div class="columns is-vcentered is-centered is-multiline mobile">
      <div class="column is-full-mobile is-9-tablet is-8-desktop">
        <h3 class="is-size-4 is-size-2-desktop">Herramientas</h3>
      </div>
      <div class="column is-full-mobile is-9-tablet is-8-desktop">
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
      <div class="column is-full-mobile is-9-tablet is-8-desktop">
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
        <div class="media media-tools-subtitle">
          <h4 class="is-size-5 tools-subtitle is-size-3-desktop">Softskills</h4>
          <!-- <div class="media-right">
            <figure class="image is-32x32">
              <img :src="require(`../assets/icons/coffee.svg`)" alt="Image" />
            </figure>
          </div>-->
        </div>
        <div class="columns is-multiline is-mobile tool-cards"></div>
        <Softskillscard
          class="column is-6-mobile is-4-tablet is-3-desktop"
          v-for="tool in softskills"
          :key="tool.name"
          :tool="tool"
        />
      </div>
    </div>
  </section>
</template>

<script>
// import Underconstruction from "@/components/Underconstruction.vue";
import Toolcard from "@/components/Toolcard.vue";
import Softskillscard from "@/components/Softskillscard.vue";
export default {
  components: {
    // Underconstruction,
    Toolcard,
    Softskillscard
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
          name: "npm",
          imgPath: "ionicons_svg_logo-npm.svg"
        },
        {
          name: "bulma"
        },
        {
          name: "jest"
        },
        {
          name: "figma"
        },
        { name: "invision studio" }
      ],
      otherTools: [
        {
          name: "agile",
          imgPath: "trello.svg"
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

/* .media-tools-subtitle {
  align-self: center;
} */
</style>
