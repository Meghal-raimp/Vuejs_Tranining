<template>
  <div>
    <h1>Dynamic Component </h1>
    <button @click="changeComponent"> Change component </button>
    <component :is="componentIs"></component>
  </div>
</template>
<script>
import CustomComponent1 from "@/components/dynamicComponent/component1.vue";
import CustomComponentTest2 from "@/components/dynamicComponent/component2.vue";

export default {
  name: 'DynamicComponent',
  components: {CustomComponentTest2, CustomComponent1},
  data(){
    return {
      componentIs: "CustomComponentTest2",
    }
  },
  methods:{
    changeComponent(){
      if(this.componentIs === "CustomComponentTest2"){
        this.componentIs = "CustomComponent1";
      }
      else if(this.componentIs === "CustomComponent1") {
        this.componentIs = "CustomComponentTest2";
      }
    }
  },
}
</script>