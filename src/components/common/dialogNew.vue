<template>
  <div>
    <el-dialog
      :title="!id ? '新增' : isEdit ? '详情' : '修改'"
      :visible.sync="dialogFormVisible"
      :before-close="handleClose"
    >
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        :disabled="isEdit"
      >
        <el-form-item label="日期" prop="date">
          <el-date-picker
            v-model="ruleForm.date"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-select v-model="ruleForm.activity" placeholder="请选择活动名称">
            <el-option
              v-for="(item, index) in itemList"
              :key="index"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="noOpen()">取 消</el-button>
        <el-button type="primary" @click="isSure()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        date: "",
        name: "",
        address: "",
        activity: ""
      },
      dialogFormVisible: false,
      id: 0,
      isEdit: false,
      itemList: [
        { name: "打篮球", value: 1 },
        { name: "踢足球", value: 2 },
        { name: "打羽毛球", value: 3 }
      ]
    };
  },
  methods: {
    init(id, isEdit) {
      this.dialogFormVisible = true;
      this.id = 0 || id;
      this.isEdit = isEdit ? true : false;
      if (id) {
        this.itemList.map(item => {
          if (item.name == id.activity) {
            this.activity = id.activity;
          }
        });
        this.ruleForm = { ...id };
      }
    },
    noOpen() {
      this.dialogFormVisible = false;
      this.ruleForm = {};
    },
    isSure() {
      const time = this.$moment(this.ruleForm.date).format("YYYY-MM-DD");
      this.dialogFormVisible = false;
      if (!this.id) {
        console.log("调新增接口");
        this.ruleForm.date = time;
        this.$emit("addData", this.ruleForm);
        this.ruleForm = {};
      } else {
        let updateforms = { ...this.ruleForm, date: time };
        this.$emit("updateData", updateforms);
      }
    },
    handleClose() {
      this.dialogFormVisible = false;
      this.ruleForm = {};
    }
  }
};
</script>
