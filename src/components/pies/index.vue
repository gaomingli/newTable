<template>
  <div>
    <div
      id="pies"
      :style="{ width: '400px', height: '400px', margin: 'auto' }"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    yData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.drawPies();
  },
  methods: {
    drawPies() {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById("pies"));
      console.log("myChart===>", this.myChart);
      myChart.setOption({
        tooltip: {
          trigger: "item"
        },
        legend: {
          top: "5%",
          left: "center"
        },
        series: [
          {
            title: "访问来源",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: this.yData
          }
        ]
      });
    }
  }
};
</script>
