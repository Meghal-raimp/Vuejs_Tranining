import {createRouter, createWebHistory} from "vue-router";
import RouterComponent from '../components/routerComponent/rountercomponent.vue'
import FetchApi from '../components/apiFetch/apifetch.vue'
import SampleChart from "@/components/chart/chart.vue";


const routes = [
    {
        path: "/firstroute",
        name: "first route",
        component: RouterComponent,
    },
    {
        path: "/fetchapi",
        name: "Fetch API",
        component: FetchApi,
    },
    {
        path: "/chart",
        name: "sample Chart",
        component: SampleChart,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.Base_URL),
    routes,
})

export default router;