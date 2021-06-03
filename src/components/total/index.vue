<!--
 * @Author       : yfye
 * @Date         : 2021-06-03 15:23:31
 * @LastEditors  : yfye
 * @LastEditTime : 2021-06-03 15:36:04
 * @FilePath     : \newTable\src\components\total\index.vue
-->
<template>
  <div>
<<<<<<< HEAD
      <el-button type="primary"  size="mini" @click="openDialog()">
	        新增
          </el-button>
=======
    <el-button type="primary" size="mini" @click="openDialog()">
      新增
    </el-button>
>>>>>>> d5bdb9149054ca67f7b8d7249dea59c0338d4fb5
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
<<<<<<< HEAD
          <el-button type="primary" size="mini"  @click="openDialog(scope.row)" >
            修改
          </el-button>
 
          <el-button type="primary" size="mini" @click="openDialog(scope.row.id,scope.row)" > 
            详情
          </el-button>
 
        
=======
          <el-button
            type="primary"
            size="mini"
            @click="openDialog(scope.row.id)"
          >
            修改
          </el-button>

          <el-button
            type="primary"
            size="mini"
            @click="openDialog(scope.row.id, scope.row.name)"
          >
            详情
          </el-button>
>>>>>>> d5bdb9149054ca67f7b8d7249dea59c0338d4fb5
        </template>
      </el-table-column>
    </el-table>
    <Dialogform ref="dialogform" :dialogfrom="dislogfrom" v-if="formVisible" />
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
          address: "上海市普陀区金沙江路 1518 弄",
          id: 8,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          id: 1,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          id: 2,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          id: 3,
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
  methods: {
<<<<<<< HEAD
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
=======
    openDialog(id, read) {
      this.dislogfrom = { ...read };
      this.formVisible = true;
      this.$nextTick(() => {
        this.$refs.dialogform.init(id, read);
      });
    },
  },
>>>>>>> d5bdb9149054ca67f7b8d7249dea59c0338d4fb5
};
</script>
