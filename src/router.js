import HomeView from "./views/HomeView.vue";
import RegistrationView from "./views/RegistrationView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "registration",
    component: RegistrationView,
  },
];

export { routes };
