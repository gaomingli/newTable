<template>
  <div>
    <button @click="refChild">再次点击</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    refChild() {
      alert("点击多次");
    },
  },
};
</script>