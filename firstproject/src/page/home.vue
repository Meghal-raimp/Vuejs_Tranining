<template>
  <div>
    <div>

<!--      <HelloWorld />-->
<!--      <ConditionalRendering />-->
<!--      <ListRendering />-->
<!--      <DynamicComponent />-->
<!--      <hr />-->
<!--      <router-link to="/firstroute"> go to router </router-link> <br />-->
<!--      <router-link to="/fetchapi"> Dynamic Data Table </router-link> <br />-->
<!--      <router-link to="/chart"> sample chart </router-link> <br />-->
<!--      <router-link to="/vuex"> Vuex </router-link> <br />-->
<!--      <hr>-->
<!--       -->
      <VUEX />
    </div>
  </div>
</template>
<script>
// import ListRendering from "@/components/listrendering.vue";
// import DynamicComponent from "@/components/dynamicComponent/dynamiccomponent.vue";
// import ConditionalRendering from "@/components/conditionalrendering.vue";
// import HelloWorld from "@/components/template.vue";
// import DataTable from "@/components/dataTables/datatables.vue";

import VUEX from "@/components/vuex/vuex.vue";
import {mapActions} from "vuex";

export default {
  name: "HomePage",
  components: {VUEX},
  // components: {VUEX,SampleChart,DataTable, HelloWorld, ConditionalRendering, DynamicComponent, ListRendering}
  created() {
      this.fetchDummyData();
  },
  methods:{
    ...mapActions(['fetchDummyData'])
  }
}
</script>