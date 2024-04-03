import {createRouter, createWebHistory} from "vue-router";
import RouterComponent from '../components/routerComponent/rountercomponent.vue'
import FetchApi from '../components/apiFetch/apifetch.vue'
import SampleChart from "@/components/chart/chart.vue";
import VUEX from "@/components/vuex/vuex.vue";

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
    },
    {
        path: "/vuex",
        name: "Vuex",
        component: VUEX,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.Base_URL),
    routes,
})

export default router;