<template>
  <div class="main-content">
    <el-input placeholder="输入关键字进行过滤" v-model="filterText"> </el-input>
    <el-tree
      :data="data"
      ref="navTree"
      :props="defaultProps"
      @node-click="handleNodeClick"
      :highlight-current="true"
      show-checkbox
      node-key="id"
      :default-checked-keys="[4]"
      :default-expanded-keys="[4, 9]"
      :filter-node-method="filterNode"
      @check-change="handleCheckChange"
    ></el-tree>
    <!-- 懒加载 -->
    <div class="second-tree">
      <el-tree
        :props="props"
        :lazy="true"
        :load="loadNode"
        :show-checkbox="true"
        @check-change="handleCheckChange1"
      ></el-tree>
    </div>
  </div>
</template>
<script>
import data from "@/data";
export default {
  data() {
    return {
      data: data.treedata,
      defaultProps: {
        children: "children",
        label: "title",
      },
      props: {
        children: "zones",
        label: "label",
      },
      count: 1,
      filterText: "",
    };
  },
  watch: {
    filterText(val) {
      this.$refs.navTree.filter(val);
    },
  },
  created() {},
  methods: {
    handleNodeClick(data) {
      alert(data.id);
    },
    loadNode(node, resolve) {
      console.log("111===", node, "2222===", resolve);
      if (node.level === 0) {
        //  return resolve([{name:'一级菜单1'},{name:'一级菜单2'}])
        return resolve([{ label: "一级菜单1" }, { label: "一级菜单2" }]);
      }
      if (node.level > 3) return resolve([]);

      var hasChild;
      if (node.data.label === "一级菜单1") {
        hasChild = true;
      } else if (node.data.label === "一级菜单2") {
        hasChild = false;
      } else {
        hasChild = Math.random() > 0.5;
      }

      setTimeout(() => {
        var data;
        if (hasChild) {
          data = [
            {
              label: "菜单" + this.count++,
            },
            {
              label: "菜单" + this.count++,
            },
          ];
        } else {
          data = [];
        }

        resolve(data);
      }, 500);
    },
    handleCheckChange(data, checked, childIscheck) {
      console.log(
        "1111===",
        data,
        "2222====",
        checked,
        "3333=====",
        childIscheck
      );
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
  },
};
</script>
<style>
.button-group {
  margin-top: 10px;
}
.second-tree {
  margin-top: 30px;
}
</style>