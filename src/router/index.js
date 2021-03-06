import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PointsOfInterest from "../views/PointsOfInterest.vue";
import EditPoi from "../views/EditPointOfInterest.vue";
import Companies from "../views/Companies.vue";
import Company from "../views/Company.vue";
import Edit from "../views/Edit.vue";
import GreenScore from "../views/GreenScore.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },

  {
    path: "/Edit",
    name: "Edit",
    component: Edit
  },
  {
    path: "/greenscore",
    name: "greenscore",
    component: GreenScore
  },
  {
    path: "/shops",
    name: "shops",
    component: PointsOfInterest
  },
  {
    path: "/poi/:uid",
    name: "poi",
    component: EditPoi
  },
  {
    path: "/company-list",
    name: "company-list",
    component: Companies
  },
  {
    path: "/company/:uid",
    name: "company",
    component: Company
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
