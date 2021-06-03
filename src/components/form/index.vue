<template>
  <div class="form-example">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="输入框" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="下拉框" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="日期框" prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="时间框" prop="date2">
            <el-time-picker
              placeholder="选择时间"
              v-model="ruleForm.date2"
              style="width: 100%"
            ></el-time-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="开关" prop="delivery">
            <el-switch v-model="ruleForm.delivery"></el-switch>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="复选框" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="选择1" name="type" :value="1"></el-checkbox>
              <el-checkbox label="选择2" name="type" :value="2"></el-checkbox>
              <el-checkbox label="选择3" name="type" :value="3"></el-checkbox>
              <el-checkbox label="选择4" name="type" :value="4"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="单选框" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio :label="1">A</el-radio>
              <el-radio :label="2">B</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="文本域" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="加减框">
            <el-input-number
              v-model="ruleForm.num"
              @change="handleChange"
              :min="1"
              :max="10"
              label="描述文字"
            ></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="级联菜单">
            <el-cascader
              v-model="ruleForm.values"
              :options="optionsdata"
              @change="handleChanges"
            ></el-cascader>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="上传文件">
            <el-upload
              class="upload-demo sendData"
              :action="UploadUrl()"
              accept=".xls"
              :on-preview="handlePreview"
              :on-change="fileChange"
              :before-remove="beforeRemove"
              :before-upload="beforeUpload"
              :limit="3"
              :http-request="uploadFile"
              :auto-upload="true"
              :on-exceed="handleExceed"
              :file-list="fileList"
              :multiple="true"
              :show-file-list="false"
            >
              <el-button size="small" type="primary" class="dataSendBtn"
                >上传数据</el-button
              >
              <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
            </el-upload>
            <!-- 文件放置 -->
            <div v-if="fileList.length > 0">
              <div v-for="(item, index) in fileList" :key="index">
                {{ item.name }}
                <el-button
                  size="small"
                  type="text"
                  icon="el-icon-view"
                  @click="view()"
                  >预览</el-button
                >
                <el-button
                  size="small"
                  type="text"
                  icon="el-icon-download"
                  @click="down()"
                  >下载</el-button
                >
                <el-button
                  size="small"
                  type="text"
                  icon="el-icon-download"
                  @click="delte(fileList, index)"
                  >删除</el-button
                >
              </div>
            </div>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >新增</el-button
            >
            <el-button type="warning" @click="viewForm('ruleForm')"
              >修改</el-button
            >
            <el-button type="info" @click="resetForm('ruleForm')"
              >重置</el-button
            >
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import list from "@/data";
export default {
  data() {
    return {
      optionsdata: list.optionsdatas,
      ruleForm: {
        phone: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        values: [],
        num: 1,
      },
      fileList: [],
      options: [
        {
          value: "1",
          label: "东西湖",
        },
        {
          value: "2",
          label: "花山",
        },
        {
          value: "3",
          label: "关东街",
        },
        {
          value: "4",
          label: "光谷",
        },
        {
          value: "5",
          label: "软件新城",
        },
      ],
      urlList: [],
      fileData:[]
    };
  },
  created() {

  },
  methods: {
    submitForm(formName) {
      let checkSum = [];
      this.ruleForm.type.map((item, index) => {
        checkSum.push(index);
      });
      const startimes = this.$moment(this.ruleForm.date1).format("YYYY-DD-MM");
      const endtimes = this.$moment(this.ruleForm.date2).format("HH:mm:ss");
      let ruleForms = {
        ...this.ruleForm,
        date1: startimes,
        date2: endtimes,
        type: checkSum,
        urlList: this.urlList,
      };
      console.log("ruleForms====", ruleForms);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          alert("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleChange(value) {},
    handleChanges(value) {

    },
    viewForm() {},
    UploadUrl() {
      // 因为action参数是必填项，我们使用二次确认进行文件上传时，直接填上传文件的url会因为没有参数导致api报404，所以这里将action设置为一个返回为空的方法就行，避免抛错
      return "";
    },
    fileChange(file, fileList) {
      // this.fileList.push(file.raw);
      this.fileList = fileList;
      console.log("文件名称====", this.fileList);
    },
    handleCurrentChange() {},
    handleSizeChange() {},

    uploadFile(val) {
      if (this.fileList.length === 0) {
        this.$message.warning("请上传文件");
      } else {
        const form = new FormData();
        // file和flag分别为后端要求上传的参数名，类似于post、get等请求中的参数
        form.append("file", val.file);
        this.$axios
          .post("http://47.116.76.2:8889/renren-fast/sys/user/fileUpload", form)
          .then((res) => {
            if (res.data.state == "success") {
              this.fileData = res.data;
              this.urlList.push(res.data.url);
              console.log("this.urlList=====", this.urlList);
              this.$message({
                message: "上传成功",
                type: "success",
              });
            } else {
              console.log(res);
            }
          })
          .catch((res) => {
            console.log(res);
          });
      }
    },
    handlePreview(file) {
      console.log(file);
    },
    // 文件限制钩子函数
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件,请刷新页面后重试。`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    beforeUpload(file) {},
    delte(list, index) {
      list.splice(index, 1);
      this.$message({
        message: "删除成功",
        type: "success",
      }); 
    },
    view() {},
    download(list,index) {
      let aTag = document.createElement("a");
      let blob = new Blob([this.fileData]); // 这个content是下载的文件内容，自己修改
      aTag.download = list[0].name; // 下载的文件名
      aTag.href = URL.createObjectURL(blob);
      aTag.click();
      URL.revokeObjectURL(blob);      
    },
    down(){ 
      const data = JSON.stringify(this.fileData);
      const f = new Blob([data],{type:'application/vnd.ms-excel'});
      const url = URL.createObjectURL(f);

      const a = document.createElement('a');
      a.setAttribute('href',url);
      a.setAttribute('download','测试下载');

      a.style.setProperty('display','none');
      document.body.appendChild(a);

      a.click();
      a.remove();
      
      URl.revokeObjectURL(url)
    }
  },
};
</script>
<style>
.form-example {
  width: 900px;
  margin: 10px auto;
}
</style>