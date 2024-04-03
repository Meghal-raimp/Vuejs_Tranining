import {createRouter, createWebHistory} from "vue-router";
import RouterComponent from '../components/routerComponent/rountercomponent.vue'
import FetchApi from '../components/apiFetch/apifetch.vue'

const routes = [
    {
        path: "/firstroute",
        name: "first route",
        component: RouterComponent,
    },
    {
        path: "/fetchapi",
        name: "Fetch API ",
        component: FetchApi,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.Base_URL),
    routes,
})

export default router;