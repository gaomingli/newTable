<template>
  <div>
    <span>{{ message }}</span>
  </div>
</template>
<script>
export default {
  props: {
      message:{
          type:String,
          default:'hhh'
      }
  },
};
</script>