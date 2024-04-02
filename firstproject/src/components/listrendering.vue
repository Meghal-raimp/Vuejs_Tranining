<template>
  <div>
    <h1> List Rendering</h1>
    <table>
      <thead>
      <tr>
        <th> id </th>
        <th> Name </th>
        <th> Mark </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(list, index) in listData" :key="index">
        <td>{{list.id}}</td>
        <td>{{list.Name}}</td>
        <td>{{list.Mark}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "ListRendering",
  data(){
    return {
      listData: [
        {id: 1, Name: 'Meghal', Mark: 96},
        {id: 2, Name: 'Bhargav', Mark: 99},
        {id: 3, Name: 'kosar', Mark: 98},
        {id: 4, Name: 'vijay', Mark: 100},
      ]
    }
  },
}
</script>