/*
 * @Author       : yfye
 * @Date         : 2021-06-03 15:23:31
 * @LastEditors  : yfye
 * @LastEditTime : 2021-06-03 16:02:08
 * @FilePath     : \newTable\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import rules from './utils/formCheck.js'
import moment from "moment";
import './assets/icon/iconfont.css';
// 引用API文件
import store from "@/store/index.js";
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts

Vue.filter('formatDate', function(value) {
        return Moment(value).format('YYYY-MM-DD HH:mm:ss')
    })
    // step1：引入 axios
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/user'
import { env } from 'shelljs'
// step2：把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求,
// 不需要每次都 import一下 axios了，直接使用 $axios 即可
// step3：使每次请求都会带一个 / 前缀
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$rules = rules
Vue.prototype.$moment = moment;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
