<template>
  <div>
    <h1 id="heading"> hello world</h1>
    <p>{{string}}</p>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      string: 'Hello World'
    }
  },
  beforeCreate() {
    alert('before crate life cycle hook')
  },
  created() {
    alert(this.string);
    alert('created life cycle hook')
  },
  beforeMount() {
    alert('before mounted life cycle hook')
  },
  mounted() {
    alert('mounted life cycle hook');
    this.updateData();
  },
  beforeUpdate() {
    alert('before update life cycle hook')
  },
  updated() {
    alert('updated life cycle hook')
  },
  methods:{
    updateData(){
      return this.string = "updated data";
    }
  }
  // data come here
  // lifeCycle will come here
  // methods
}
</script>
<style>
  #heading{
    color: red;
    margin-top: 10px;
  }
</style>

kassist 5676788