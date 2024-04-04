<template>
  <div>
    <h1>Watcher Called</h1>
    <button  @click="count+=1"> + </button>
    <h1> {{count}}</h1>
    <button @click="count-=1"> - </button>
  </div>
</template>
<script>
export default {
  name: 'WatcherComponent',
  data(){
    return{
      count: 0
    }
  },
  watch:{
    count(val){
      if(val > 5){
        alert('value is 5')
      }
      if(val < 0){
        alert('value is 0')
      }
    }
  }
}
</script>