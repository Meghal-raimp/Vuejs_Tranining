import {createRouter, createWebHistory} from "vue-router";
import RouterComponent from '../components/routerComponent/rountercomponent.vue'

const routes = [
    {
        path: "/firstroute",
        name: "first route",
        component: RouterComponent,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.Base_URL),
    routes,
})

export default router;