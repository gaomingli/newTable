<!--
 * @Author       : yfye
 * @Date         : 2021-06-03 15:23:31
 * @LastEditors  : yfye
 * @LastEditTime : 2021-06-03 16:49:01
 * @FilePath     : \newTable\src\components\header\index.vue
-->
<template>
  <div class="header-common">
    <ul class="components-list">
      <li
        v-for="(item, index) in goods"
        :key="index"
        class="menu-item"
        @click="toggle(index)"
        :class="{ active: index == checkindex }"
      >
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
    <div class="login-out"><router-link to="/login">退出登录</router-link></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkindex: 0,
      goods: [
        { name: "表格", path: "/table" },
        { name: "表单", path: "/form" },
        { name: "树", path: "/tree" },
        { name: "分页", path: "/pagnation" },
        { name: "导出", path: "/output" },
        { name: "预览", path: "/overview" },
        { name: "拓展", path: "/others" },
        { name: "综合", path: "/total" },
        { name: "生命周期", path: "/actived" }
      ],
    };
  },
  methods: {
    toggle(index) {
      this.checkindex = index;
    },
  },
};
</script>

<style>
.header-common {
  height: 50px;
  background: #e2bebe;
}
.components-list li {
  list-style: none;
  float: left;
  /* padding: 5px 20px; */
  color: #ffffff;
}
.components-list li a {
  color: #3a10f5;
  text-decoration: none;
  padding: 0px 20px;
    display: block;
}
.components-list {
  margin: 0;
  padding: 0;
  height: 50px;
  line-height: 50px;
  width: 700px;
  margin: 0 auto;
}
.login-out {
  position: absolute;
  right: 0;
  top: 0;
  color: #f00;
}
.active {
  background: white;
}
</style>