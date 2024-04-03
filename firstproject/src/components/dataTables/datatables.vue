<template>
  <div>
    <h1> dataTable in vue js</h1>
    <div id="tableSection">
    </div>
  </div>
</template>
<script>

import axios from "axios";
export default {
  name: "DataTable",
  data(){
    return {
      dynamicData:[]
    }
  },
  created() {
    this.getData();
  },
  mounted() {
    this.getDataTable( );
  },
  methods:{
    getDataTable(dynamicData){
      document.getElementById('tableSection').innerHTML = ''
      document.getElementById('tableSection').innerHTML = '<table class="table table-striped" id="normalTable">'
      window.$('#normalTable').DataTable({
        data:dynamicData,
        columns: [
          {
            data:"title",
            title: "Title"
          },
          {
            data:"description",
            title: "Description"
          },
          {
            data:"price",
            title: "price"
          }
        ]
      });
    },
    getData(){
      var _this = this;
      axios.get('http://localhost:3000/products')
          .then(function (response){
            console.log('response ==>', response?.data);
            _this.getDataTable(response?.data);
          })
          .catch(function (error){
            console.log(error);
          })
    }
  }
}
</script>