<template>
  <div>
    <!-- <el-button type="primary" @click="download('fileadd', '申请表')"
      >下载</el-button
    > -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    // download(type, title) {},·
    // sheng(data, fileName, fileType) {
    //   let href = createObjectURL(data, fileType);
    //   let downE = document.createElement("a");
    //   downE.href = href;
    //   downE.download = fileName;
    //   downE.body.appendChild(downE);
    //   downE.click();
    //   downE.body.removeChild(downE);
    //   removeObject(href);
    // },
    // createObjectURL(data, fileType) {
    //   let blob = new Blob([data], { type: fileType });
    //   let href = window.URL.createObjectURL(blob);
    //   return href;
    // },
    // removeObject(href) {
    //   window.URL.removeObject(href);
    // },
  },
};
</script>