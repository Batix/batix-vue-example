import Vue from "vue";
import VueRouter from "vue-router";
import AbsolutDiagramm from "../views/AbsolutDiagramm"
import AuslastungDiagramm from "../views/AuslastungDiagramm"
import MachinesDiagramm from "../views/MachinesDiagramm"
import Home from "../views/Home"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/absolut",
    name: "Absolut",
    component: AbsolutDiagramm
  },
  {
    path: "/auslastung",
    name: "Auslastung",
    component: AuslastungDiagramm
  },
  {
    path: "/machines",
    name: "Maschienen",
    component: MachinesDiagramm
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
