<template>
  <div>
    <div>
<!--      <HelloWorld />-->
<!--      <ConditionalRendering />-->
<!--      <ListRendering />-->
<!--      <DynamicComponent />-->
<!--      <hr />-->
<!--      <router-link to="/firstroute"> go to router </router-link>-->
<!--      <hr>-->
<!--      <router-view></router-view>-->
      <DataTable />
    </div>
  </div>
</template>
<script>
// import ListRendering from "@/components/listrendering.vue";
// import DynamicComponent from "@/components/dynamicComponent/dynamiccomponent.vue";
// import ConditionalRendering from "@/components/conditionalrendering.vue";
// import HelloWorld from "@/components/template.vue";
import DataTable from "@/components/dataTables/datatables.vue";

export default {
  name: "HomePage",
  // components: {DataTable, HelloWorld, ConditionalRendering, DynamicComponent, ListRendering}
  components: {DataTable}
}
</script>