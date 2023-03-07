import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import AboutView from "../views/AboutView.vue";
import SkyView from "../views/SkyView.vue";
import MentionsView from "../views/MentionsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/contact", name: "contact", component: ContactView },
    { path: "/about", name: "about", component: AboutView },
    { path: "/sky", name: "sky", component: SkyView },
    { path: "/mentions", name: "mentions", component: MentionsView },
  ],
});

export default router
