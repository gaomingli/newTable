<template>
  <div>
    <div>
      <span>年份:</span>
      <el-select v-model="form.value" placeholder="请选择">
        <el-option
          v-for="item in yearList"
          :key="item"
          :label="item"
          :value="item"
        >
          {{ item }}
        </el-option>
      </el-select>
    </div>

    <div id="bar" :style="{ width: '400px', height: '400px',margin:'auto'}"></div>
  </div>
</template>
<script>
export default {
  props: {
    yearList: {
      type: Array,
      default: []
    },
    xData:{
      type:Array,
      default:[]
    },
    yData:{
      type:Array,
      default:[]
    }
  },
  data() {
    return {
      form: {
        value: this.yearList[0]
      }
    };
  },
  created() {
    console.log("yearList==>", this.yearList);
  },
  mounted(){
     this.drawBar();
  },
  methods:{
     drawBar(){
      var echarts = require('echarts');
      var myChart = echarts.init(document.getElementById('bar'));
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: this.xData.map(item => item.year)
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          barWidth : 10,
          data: this.yData.map(item => item.sum)
        }]
      });
    }
  }
};
</script>
