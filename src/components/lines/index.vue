<template>
  <div>
    <div
      id="lines"
      :style="{ width: '400px', height: '400px', margin: 'auto' }"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    xData: {
      type: Array,
      default: []
    },
    yData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById("lines"));
      myChart.setOption({
        xAxis: {
          type: "category",
          data: this.xData.map(item => item.year)
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: this.yData.map(item => item.sum),
            type: "line"
          }
        ]
      });
    }
  }
};
</script>
