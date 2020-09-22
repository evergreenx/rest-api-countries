import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/HomeCountry";
import CountryDetail from "../components/CountriesDetails";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/:country",
    name: "country-detail",
    component: CountryDetail,
    props:true,
    meta: {
      title: 'REST API Countries App'
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
