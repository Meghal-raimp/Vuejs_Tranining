<template>
  <div>
    <h1>Conditional rendering</h1>
    <h2 v-if="show">conditional working</h2>
  </div>
</template>
<script>
export default {
  name: 'ConditionalRendering',
  data() {
    return {
      show: false,
    }
  }
}
</script>