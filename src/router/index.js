import Vue from "vue";
import VueRouter from "vue-router";

import Cadastro from "../components/Cadastro.vue";
import Editar from "../components/Editar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Cadastro",
    component: Cadastro,
  },
  {
    path: "/Editar",
    name: "Editar",
    component: Editar
  },
];

const router = new VueRouter({
  routes
});

export default router;
