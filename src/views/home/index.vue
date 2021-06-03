<template>
<div class="main">
<Header/>
<router-view></router-view>
<Footer/>
</div>
</template>
<script>
import Header from "@/components/header/index"
import Footer from "@/components/footer/index"
export default {
  components:{Header,Footer}
}
</script>
<style>
.main{
  height: 100%;
  overflow-y: hidden;
}
</style>