<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button type="primary" size="mini"  @click="openDialog(scope.row.id)" >
            修改
          </el-button>
 
          <el-button type="primary" size="mini" @click="openDialog(scope.row.id,scope.row.name)" > 
            详情
          </el-button>
 
          <el-button type="primary"  size="mini" @click="openDialog()">
	        新增
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <Dialogform ref="dialogform" v-if="formVisible"/>
  </div>
</template>
<script>
import dialogform from "@/components/common/dialogNew";
export default {
  components: {
    Dialogform: dialogform
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id:8
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          id:1
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          id:2
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          id:3
        }
      ],
      formVisible:false
    };
  },
  methods: {
      openDialog(id,read){
          this.formVisible = true;
          this.$nextTick(() => {
          this.$refs.dialogform.init(id,read);
           })
      },
      // isDetail 是详情传过来的true的值，用来区分详情和查看
      addOrUpdateHandle(id,isDetail) {
        this.formVisible = true // 控制弹出框显示
        this.$nextTick(() => {
          this.$refs.dialogform.init(id,isDetail)  // init（）是子组件函数
        })
      },
  }
};
</script>
