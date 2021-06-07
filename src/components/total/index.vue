<!--
 * @Author       : yfye
 * @Date         : 2021-06-03 15:23:31
 * @LastEditors  : yfye
 * @LastEditTime : 2021-06-03 15:57:00
 * @FilePath     : \newTable\src\components\total\index.vue
-->
<template>
  <div>
      <el-button type="primary"  size="mini" @click="openDialog()">
	        新增
          </el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="name" label="状态"> 
        <template slot-scope="scope">
          <!-- 用于判断的一般在字典值里面可以查到 -->
            <el-tag :type="scope.row.valid==0?'danger':'success'">
              {{scope.row.isDisabled}}
            </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址" :show-overflow-tooltip='true'> </el-table-column>
      <el-table-column prop="activity" label="活动名称"></el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button type="primary" size="mini"  @click="openDialog(scope.row,false)" >
            修改
          </el-button>
 
          <el-button type="primary" size="mini" @click="openDialog(scope.row,true)" > 
            详情
          </el-button>
 
        
        </template>
      </el-table-column>
    </el-table>
    <Dialogform ref="dialogform" :dialogfrom="dislogfrom" v-if="formVisible" @addData = "addData" @updateData = "updateData"/>
  </div>
</template>
<script>
import dialogform from "@/components/common/dialogNew";
export default {
  components: {
    Dialogform: dialogform,
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄",
          id: 8,
          valid:1,
          isDisabled:'禁用',
          activity:'打篮球'
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区",
          id: 1,
          valid:0,
          isDisabled:'启用',
          activity:'踢足球'
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1519 弄",
          id: 2,
          valid:1,
          isDisabled:'禁用',
          activity:'打篮球'
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区",
          id: 3,
          valid:1,
          isDisabled:'禁用',
          activity:'打羽毛球'
        },
      ],
      formVisible: false,
      dislogfrom: {
        date: "",
        name: "",
        address: "",
      },
    };
  },
  computed:{
    // address(){
    //   this.tableData.map((item)=>{
    //     if(item.address.length>6){
    //       return item.address.slice(0,6)+"...";
    //     }else{
    //       return item.address;
    //     }
    //   })
    // }
  },
  methods: {
    openDialog(a, b) {
      this.formVisible = true;
      this.$nextTick(() => {
        this.$refs.dialogform.init(a, b);
      });
    },
    addData(data){
      this.tableData = _.concat(this.tableData, data);
    },
    updateData(data){   
      this.tableData.map((item)=>{
        if(item.id == data.id){
           item = data;
        }
      })
    }
  },
};
</script>
