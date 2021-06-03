<template>
  <div>
    <h2>
      {{msg}}
    </h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'this is assembly Two'
      }
    },
    created() {
      console.info('我是组件2，此时我的created钩子已经被执行了')
    },
    mounted() {
      console.info('我是组件2，此时我的mounted钩子已经被执行了')
    },
    activated() {
      console.info('我是组件2，此时我的activated钩子已经被执行了')
    },
    deactivated() {
      console.info('我是组件2，此时我的deactivated钩子已经被执行了')
    }
  }
</script>
<style>
</style>