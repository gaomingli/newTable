<template>
  <div class="main-content">
    <!-- 搜索条件 -->
    <div class="search-more">
      <el-form inline :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input
            v-model="formInline.author"
            placeholder="请输入姓名"
          ></el-input>
        </el-form-item>
        <el-form-item label="作品名称">
          <el-input
            v-model="formInline.title"
            placeholder="请输入作品名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-date-picker
            type="date"
            placeholder="开始时间"
            v-model="formInline.time"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchContent()">查询</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格 -->
    <div class="table-add">
      <el-button type="primary" @click="handleAdd()">新增</el-button>
      <el-button
        type="danger"
        @click="deleteAll(sels)"
        :disabled="sels.length === 0"
        >批量删除</el-button
      >
    </div>
    <div class="table-more">
      <el-table
        :data="tableData"
        style="width: 100%"
        border
        @selection-change="selsChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="author" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="title" label="作品名称" width="180">
        </el-table-column>
        <el-table-column label="照片">
          　　<template slot-scope="scope">
            　　　　<img
              :src="scope.row.logo"
              width="40"
              height="40"
              class="head_pic"
            />
            　　</template
          >
        </el-table-column>
        <el-table-column prop="time" label="日期"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="warning"
              @click="handleEdit(scope.$index, scope.row)"
              >修改</el-button
            >
            <el-button
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="pagnation-more">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="14"
      >
      </el-pagination>
    </div>
    <!-- 新增弹框 -->
    <div>
      <el-dialog title="新增" :visible.sync="addDialog">
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.author" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="作品名称" :label-width="formLabelWidth">
            <el-input v-model="form.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="开始时间">
            <el-date-picker
              type="date"
              placeholder="请选择"
              v-model="form.time"
              style="width: 200px"
            ></el-date-picker>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addNo()">取消</el-button>
          <el-button type="primary" @click="addYes()">确定</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 修改弹框 -->
    <div>
      <el-dialog title="修改" :visible.sync="updateDialog">
        <el-form :model="updateform">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="updateform.author" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="作品名称" :label-width="formLabelWidth">
            <el-input v-model="updateform.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="开始时间">
            <el-date-picker
              type="date"
              placeholder="请选择"
              v-model="updateform.time"
              style="width: 200px"
            ></el-date-picker>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="updateNo()">取消</el-button>
          <el-button type="primary" @click="updateYes()">确定</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 删除提示 -->
  </div>
</template>
<script>
import moment from "moment";
import { getTable } from "@/api";  // 调用api 登录接口
export default {
  data() {
    return {
      formInline: {
        author: "",
        title: "",
        time: "",
      },
      tableData: [],
      formLabelWidth: "120px",
      form: {
        author: "",
        title: "",
        time: "",
      },
      updateform: {
        author: "",
        title: "",
        time: "",
      },
      total: "",
      currentPage: 1,
      pageSize: "",
      addDialog: false,
      updateDialog: false,
      sels: [],
      selectId: 0,
    };
  },
  created() {
    // 由于 main.js 里全局定义的 axios,此处直接使用 $axios 即可。
    // 由于 main.js 里定义了每个请求前缀，此处的 / 即为 /api/，
    // 经过 vue.config.js 配置文件的代理设置，会自动转为 https://www.baidu.com/，从而解决跨域问题
    this.getTableData();
  },
  methods: {
    getTableData() {
      let formData = {Id:22,pageNo:1,pageSize:10};
     getTable(formData)
        .then((response) => {
          if (response.status=='200') {
            this.tableData = response.data;
            this.total = response.total;
            this.pageSize = response.totalPages;
            this.currentPage = response.currentPage;
          }
        })
        .catch((err) => {
          alert("请求失败");
        });
    },
    // 回显的数据
    handleEdit(caseIndex, caseRow) {
      this.selectId = caseRow.Id;
      this.updateDialog = true;
      this.updateform = this.tableData[caseIndex];
    },
    searchContent() {
      const searchtime = this.$moment(this.formInline.time).format(
        "YYYY-MM-DD"
      );
      let formInlines = { ...this.formInline, time: searchtime };
      console.log("查询条件=====", formInlines);
      // 传查询条件，调查询接口
    },
    resetForm() {
      (this.formInline.author = ""),
        (this.formInline.title = ""),
        (this.formInline.time = ""),
        this.getTableData();
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = currentPage;
      this.getTableData();
    },
    handleCurrentChange(val) {
      debugger;
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.getTableData();
    },
    handleAdd() {
      this.form.author = {};
      this.addDialog = true;
    },
    addNo() {
      this.addDialog = false;
    },
    addYes() {
      const a = this.$moment(this.form.time).format("YYYY-DD-MM");
      let forms = { ...this.form, time: a };
      this.addDialog = false;
      this.tableData = _.concat(this.tableData, forms);
    },
    updateNo() {
      this.updateDialog = false;
    },
    updateYes() {
      const a = this.$moment(this.updateform.time).format("YYYY-MM-DD");
      let updateforms = { ...this.updateform, time: a };
      console.log("11111====", updateforms);
      this.tableData.map((item) => {
        if (item.Id == this.selectId) {
          item.author = updateforms.author;
          item.title = updateforms.title;
          item.time = updateforms.time;
        }
      });
      this.updateDialog = false;
    },
    handleDelete(index, item) {
      this.$confirm("确定要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let { tableData } = this;
          _.pullAt(tableData, index);
          console.log("删除index=====", index);
          this.tableData.sort();
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    selsChange(sels) {
      this.sels = sels;
    },
    deleteAll(sels) {
      let arr = [];
      sels.map((item) => {
        const ids = item.Id;
        arr.push(ids);
      });
      this.$confirm("此操作将永久删除该文件及其子文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let { tableData } = this;
          let filter = [];
          tableData.map((item) => {
            if (!arr.includes(item.Id)) {
              filter.push(item);
            }
          });
          this.tableData = filter;
          console.log("删除成功");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>
<style>
.search-more {
  border: 1px solid #cccccc;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.table-add {
  margin: 10px 0px;
  float: left;
}
.pagnation-more {
  float: right;
}
</style>