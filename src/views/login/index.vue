<template>
  <div class="login-form">
    <el-form ref="form" :model="form" label-width="80px" :rules="$rules.common">
      <el-form-item label="邮箱" prop="mailbox">
        <el-input v-model.trim="form.mailbox"></el-input>
      </el-form-item>
      <el-form-item label="身份证号" prop="idCardNo">
        <el-input v-model.trim="form.idCardNo"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        mailbox: "",
        idCardNo: "",
      },
    };
  },
  created(){

  },
  methods: {
    onLogin(formName) {
        // debugger;
      this.$refs[formName].validate((valid) => {
        if (valid) {
            // console.log("111===>",$rules.common)
          this.$router.push({
            name: "Table",
            params: { a: this.form.username, b: this.form.password },
          });
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style>
.login-form {
  width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>