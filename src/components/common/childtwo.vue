<template>
  <div>
    <button @click="sendPartent">点击</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "我是子组件的数据",
    };
  },
  methods: {
    sendPartent() {
      this.$emit("alert", this.msg);
    },
  },
};
</script>