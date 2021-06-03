<template>
  <div class="circle">
    <!-- 伪元素绘制圆环 -->
    <p class="after-issue"><i></i></p>
    <Childone :message="values" />
    <Childtwo @alert="childFun" />
    <Childthree ref="cc" />
    <p @click="getData">1111</p>
    <span>{{ msgg }}</span>
    <span>{{ title }}</span>
    <span v-html="Html">我是</span>
    <span>{{ sum }}</span>
    <span>{{ str }}</span>
  </div>
</template>

<script>
import Childone from "@/components/common/childone";
import Childtwo from "@/components/common/childtwo";
import Childthree from "@/components/common/childthree";

export default {
  components: { Childone, Childtwo, Childthree },
  data() {
    return {
      values: "xxx",
      msgg: "",
      title: "aaaa",
      Html: "<div>你是</div>",
      sum: "",
      str: ""
    };
  },
  created() {
this.str = this.$store.state.text.tip;
    var object = { a: [{ b: { c: 3 } }] };
    _.set(object, "a[0].b.c", 4);
    console.log(object);
    console.log(_.get(object, "a[0].b.c"));

    var stringO = "   abc   def ";
    console.log(stringO.trim().length);

    var users = [
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
      { user: "pebbles", age: 1, active: true }
    ];

    _.find(users, function(t) {
      console.log("1111====", t);
      return t.age < 40;
    });
    this.sum = this.comput(4, 3);
    let arrOne = "a,b,c,d";
    let arrTwo = arrOne.split(",");
    this.str = arrTwo;

    //
    var x = 10;
    var y = 20;
    var z = "结果为: " + (x + y);
    console.log("z===>", z);

    // 数组
    var person = [];
    person["firstName"] = "John";
    person["lastName"] = "Doe";
    person["age"] = 46;
    console.log(typeof(person),person.length,person[0]);
    console.log(Array.isArray(person));

    // 数组
    let arr = ["a","b","c"];
    let obj = arr.toString(arr);
    let objects = arr.join("*");
    let objone = arr.pop();
    let objtwo = arr.push("d");
    let objth = arr.shift("a");
    let objf = arr.unshift("A");
    console.log("obj===>",obj,"objects==>",objects,"objone===>",objone,"objtwo===>",objtwo);
    console.log("objth===>",objth,"objth==>",arr);
    console.log("objf====>",objf,"objf===>",arr);
  },
  methods: {
    childFun(val) {
      this.msgg = val;
    },
    getData() {
      console.log("refs===", this.$refs);
      this.$refs.cc.refChild();
    },
    comput(a1, a2) {
      return a1 * a2;
    }
  }
};
</script>
<style>
.circle {
  height: calc(100% - 90px);
}
.after-issue {
  height: 40px;
  margin-left: 40px;
}
.after-issue i {
  width: 16px;
  height: 16px;
  background: #ffffff;
  border-radius: 50%;
  border: 1px solid #999999;
  display: inline-block;
  position: absolute;
  transform: translate(-50%, -50%);
}
.after-issue i:after {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  content: "";
  width: 10px;
  height: 10px;
  border: 1px solid #999999;
  border-radius: 50%;
  background: #f0e1ca;
  transform: translate(-50%, -50%);
}
.couple img {
  width: 100px;
  height: 100px;
}
</style>
