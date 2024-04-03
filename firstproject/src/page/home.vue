<template>
  <div>
    <div>

<!--      <HelloWorld />-->
<!--      <ConditionalRendering />-->
<!--      <ListRendering />-->
<!--      <DynamicComponent />-->
      <hr />
      <router-link to="/firstroute"> go to router </router-link> <br />
      <router-link to="/fetchapi"> Dynamic Data Table </router-link> <br />
      <router-link to="/chart"> sample chart </router-link> <br />
      <hr>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
// import ListRendering from "@/components/listrendering.vue";
// import DynamicComponent from "@/components/dynamicComponent/dynamiccomponent.vue";
// import ConditionalRendering from "@/components/conditionalrendering.vue";
// import HelloWorld from "@/components/template.vue";
// import DataTable from "@/components/dataTables/datatables.vue";

export default {
  name: "HomePage",
  // components: {SampleChart,DataTable, HelloWorld, ConditionalRendering, DynamicComponent, ListRendering}
}
</script>