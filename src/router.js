import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Projects from "./views/Projects.vue";
import Tools from "./views/Tools.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/projects",
      name: "proyectos",
      component: Projects
    },
    {
      path: "/tools",
      name: "herramientas",
      component: Tools
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
