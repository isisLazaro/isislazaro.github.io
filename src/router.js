import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Projects from "./views/Projects.vue";
import Tools from "./views/Tools.vue";
import NotFoundComponent from "./views/FileNotFound.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
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
    { path: "*", name: "notfound", component: NotFoundComponent }
  ]
});
