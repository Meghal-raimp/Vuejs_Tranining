<template>
  <div>
    <h1>Forms</h1>
    <form @submit.prevent="postForm">
      <input v-model="product.title"  id="title" type="text" placeholder="title"><br>
      <input v-model="product.description" id="description" type="text" placeholder="description"><br>
      <input v-model="product.price" id="price" type="number" placeholder="price"><br>
      <input v-model="product.discountPercentage" id="discountPercentage" type="number" placeholder="discountPercentage"><br>
      <input v-model="product.rating" id="rating" type="number" placeholder="rating"><br>
      <input v-model="product.brand" id="brand" type="text" placeholder="brand"><br>
      <input type="submit">
    </form>
    <hr>
    <h3><u> Inputs of form</u></h3>
    <p> Title : {{product.title}}</p>
    <p> description : {{product.description}}</p>
    <p> price : {{product.price}}$</p>
    <p> discountPercentage : {{product.discountPercentage}}%</p>
    <p> rating : {{product.rating}}</p>
    <p> brand : {{product.brand}}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: 'FormComponent',
  data(){
    return{
      product: {
        "title": null,
        "description": null,
        "price": null,
        "discountPercentage": null,
        "rating": null,
        "brand": null,
      },
    }
  },
  methods:{
    postForm(){
      const _this = this;
      axios.post('http://localhost:3000/products', _this.product).then(function (resp){
        console.log(resp);
        if(resp.status === 200){
          alert('Form is submitted');
        }
      })
    }
  }
}
</script>