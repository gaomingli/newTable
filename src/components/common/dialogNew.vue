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
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="noOpen()">取 消</el-button>
        <el-button type="primary" @click="isSure()"
          >确 定</el-button
        >
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
      },
      dialogFormVisible: false,
      id:0,
      isEdit:false
    };
  },
  methods: {
    init(id, isEdit) {
      this.dialogFormVisible = true;
      this.id = 0 || id;
      this.isEdit = isEdit?true:false;
      if (id) {
        this.ruleForm = {...id};
      }
    },
    noOpen(){
      this.dialogFormVisible = false;
      this.ruleForm = {}
    },
    isSure(){
      this.dialogFormVisible = false;
      this.ruleForm = {}
    },
    handleClose(){
       this.dialogFormVisible = false;
        this.ruleForm = {}
    }
  },
};
</script>
