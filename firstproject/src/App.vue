<template>
  <div>
    <HelloWorld />
    <ConditionalRendering />
    <ListRendering />
  </div>
</template>

<script>
import HelloWorld from "@/components/template.vue";
import ConditionalRendering from "@/components/conditionalrendering.vue";
import ListRendering from "@/components/listrendering.vue";

export default {
  name: 'App',
  components: {
    ListRendering,
    HelloWorld,
    ConditionalRendering,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
