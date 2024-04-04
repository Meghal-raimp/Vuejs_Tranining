<template>
  <div>
    <div>
      <WatcherComponent />
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
<!--      <VUEX />-->
<!--      <FormComponent />-->
    </div>
  </div>
</template>
<script>
// import ListRendering from "@/components/listrendering.vue";
// import DynamicComponent from "@/components/dynamicComponent/dynamiccomponent.vue";
// import ConditionalRendering from "@/components/conditionalrendering.vue";
// import HelloWorld from "@/components/template.vue";
// import DataTable from "@/components/dataTables/datatables.vue";
// import VUEX from "@/components/vuex/vuex.vue";
// import FormComponent from "@/components/forms/forms.vue";

import {mapActions} from "vuex";
import WatcherComponent from "@/components/watcher/watcher.vue";

export default {
  name: "HomePage",
  components: {WatcherComponent},
  // components: {FormComponent,VUEX,SampleChart,DataTable, HelloWorld, ConditionalRendering, DynamicComponent, ListRendering}
  created() {
      this.fetchDummyData();
  },
  methods:{
    ...mapActions(['fetchDummyData'])
  }
}
</script>