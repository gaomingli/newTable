
<template>
 
  <!-- 关键代码：:title="!dataForm.id ? '新建' :  isDetail ? '详情':'编辑'" -->
 
  <el-dialog :title="!dataForm.id ? '新增' :  isDetail ? '详情':'编辑'" :close-on-click-modal="false" :visible.sync="visible"  lock-scroll width="800px">
    <el-row :gutter="15">
      <!-- :disabled="!!isDetail" 详情表单内容禁用状态 编辑为可编辑状态-->
      <el-form ref="elForm" :model="dataForm" label-width="140px" :disabled="!!isDetail">
        <el-col :span="24">
		  <el-form-item label="日期" prop="date" >
		    <el-input v-model="dataForm.date" placeholder="请输入" clearable :style='{"width":"100%"}' type="date" format="yyyy-MM-dd" value-format="timestamp" >
			</el-input>
		  </el-form-item>
		</el-col>
		<el-col :span="24">
		  <el-form-item label="姓名" prop="name" >
			<el-date-picker v-model="dataForm.name" placeholder="请输入" clearable :style='{"width":"100%"}'>
			</el-date-picker>
		  </el-form-item>
		</el-col>
        <el-col :span="24">
		  <el-form-item label="地址" prop="address" >
			<el-date-picker v-model="dataForm.address" placeholder="请输入" clearable :style='{"width":"100%"}'>
			</el-date-picker>
		  </el-form-item>
		</el-col>
      </el-form>
    </el-row>
    <span slot="footer" class="dialog-footer">
	  <el-button @click="visible = false">取 消</el-button> 
	  <el-button type="primary" @click="dataFormSubmit()" v-if="!isDetail">
        确 定
      </el-button>
	</span>
  </el-dialog>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
        dataForm: {}
      }
    },
    methods: {
      init(id, isDetail) {
        this.dataForm.id = id || 0; // 如果有id就是编辑或者查看，没有id就是新增
        this.visible = true; // 打开弹窗
        this.isDetail = isDetail || false; // isDetail为true就是详情,没有isDetail就是false为编辑
        this.$nextTick(() => {
          this.$refs['elForm'].resetFields(); // 清空表单
          // 如果有id就是编辑查看，这里的请求用于做数据回填
          if (this.dataForm.id) {
            request({
              url: '/api/System/riskPlan/' + this.dataForm.id, // 根据项目接口写url
              method: 'get'
            }).then(res =>{
              this.dataForm = res.data; // 数据回填
              this.total = this.fxdszArr.length // 总条数
            })
          }
        })
      },
    },
 
  }
</script>