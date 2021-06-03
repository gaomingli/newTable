<template>
  <div>
    <button @click="currAssembly('one')">
      组件1
    </button>
    <button @click="currAssembly('two')">
      组件2
    </button>
    <transition>
      <keep-alive>
        <component :is="isCurr"></component>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import AssemblyOne from '@/components/assembly1'
  import AssemblyTwo from '@/components/assembly2'

  export default {
    components: {
      AssemblyOne,
      AssemblyTwo
    },
    data() {
      return {
        isCurr: 'AssemblyOne'
      }
    },
    methods: {
      currAssembly(flg) {
        if (flg === 'one') {
          this.isCurr = 'AssemblyOne'
        } else {
          this.isCurr = 'AssemblyTwo'
        }
      }
    }
  }
</script>
<style>
</style>