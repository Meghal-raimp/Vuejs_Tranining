<template>
  <div>
    <h1> working with vuex</h1>
    <hr>
    <p>{{storeData}}</p>
    <button @click="getData">Get data</button>
    <button @click="updateStore">Update Store</button>
  </div>
</template>
<script>
export default {
  name: 'VUEX',
  data(){
    return{
      storeData:null
    }
  },
  mounted() {
    this.getData();
  },
  methods:{
    getData(){
      this.storeData = this.$store.getters.DummyData.length
    },
    updateStore(){
      this.$store.commit('setDummyData',[]);
      this.storeData = this.$store.getters.DummyData
    }
  }
}
</script>