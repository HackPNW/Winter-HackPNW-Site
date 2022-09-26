import HomeView from "./views/HomeView.vue";
import RegistrationView from "./views/RegistrationView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { transition: "slide-left" },
  },
  {
    path: "/register",
    name: "registration",
    component: RegistrationView,
    meta: { transition: "slide-right" },
  },
];

export { routes };
