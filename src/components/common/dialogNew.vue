<template>
  <div>
    <el-dialog
      :title="!id ? '新增' : read ? '详情' : '修改'"
      :visible.sync="dialogFormVisible"
    >
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        :disabled="read"
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
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    dialogfrom: {
      type: Object,
    },
  },
  data() {
    return {
      ruleForm: {
        date: "",
        name: "",
        address: "",
      },
      dialogFormVisible: false,
    };
  },
  methods: {
    init(id, read) {
      this.dialogFormVisible = true;
      this.id = 0 || id;
      this.read = false || read;
      if (id) {
        this.ruleForm = this.dialogfrom;
      }
    },
  },
};
</script>
