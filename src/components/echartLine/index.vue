<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="柱状图" name="bar"></el-tab-pane>
            <el-tab-pane label="环形图" name="pie"></el-tab-pane>
            <el-tab-pane label="折线图" name="lines"></el-tab-pane>
        </el-tabs>
        <div>
          <component :is="activeName" :xData="xData" :yData="yData" :yearList = "yearList()"></component>
        </div>
    </div>
</template>
<script>
import bar from '@/components/bar'
import pies from '@/components/pies'
import lines from '@/components/lines'
export default{
  components:{bar,pies,lines},
    data(){
        return{
            activeName:'bar',
            xData:[
              {year:2010,name:"还好"},
              {year:2006,name:"好"},
              {year:2020,name:"满意"},
              {year:2018,name:"十分满意"},
              {year:2000,name:"特别满意"}
            ],
            yData:[
              {sum:200,title:"苹果"},
              {sum:300,title:"香蕉"},
              {sum:100,title:"芒果"},
              {sum:500,title:"桃子"},
              {sum:400,title:"荔枝"}
            ]
        }
    },
    methods:{
        handleClick(tab,event){
          this.activeName = tab.name;
        },
        yearList(){
           let arr = [];
           let year = new Date().getFullYear();
           for(let i=year;i>1970;i--){
              arr.push(i)
           }
           return arr;
        }
    }
}
</script>
