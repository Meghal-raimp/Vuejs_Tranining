<template>
  <div>
    <h1>Hello Chart js</h1>
    <canvas id="myChart" :height="400" :width="600"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import lineChart from "@/components/chart/line";
import axios from "axios";

export default {
  name: 'SampleChart',
  data(){
    return {
      lineChart: lineChart,
    }
  },
  mounted() {
    var _this = this;
    axios.get('http://localhost:3000/products')
        .then(function (response){
          let titleArray = [];
          let priceArray = [];
          response?.data.forEach(item => {
            titleArray.push(item.title)
            priceArray.push(item.price)
           })
          _this.lineChart.data.labels = titleArray;
          _this.lineChart.data.datasets[0].data = priceArray;
          const ctx = document.getElementById('myChart');
          new Chart(ctx, _this.lineChart);
        })
  },
}
</script>
