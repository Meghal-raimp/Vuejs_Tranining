<template>
  <div>
    <h1>fetch api using axios</h1>
    <table border="2">
      <thead>
        <tr>
          <th>thumbnail</th>
          <th>title</th>
          <th>description</th>
          <th>price</th>
          <th>discountPercentage</th>
          <th>rating</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in dynamicData" :key="data.id">
          <td><img :src="data.thumbnail"  alt="image"/></td>
          <td>{{data?.title}}</td>
          <td>{{data?.description}}</td>
          <td>{{data?.price}}</td>
          <td>{{data?.discountPercentage}}</td>
          <td>{{data?.rating}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "FetchApi",
  data(){
    return {
      dynamicData:[]
    }
  },
  created() {
    this.fetchApi();
  },
  methods:{
    fetchApi(){
      var _this = this;
     axios.get('http://localhost:3000/products')
         .then(function (response){
           _this.dynamicData = response?.data;
         })
    }
  }
}
</script>