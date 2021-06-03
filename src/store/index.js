import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        text: { tip: "这是一条数据!" }
    },
    mutatitons: {
        modify(state, msg) {
            state.text.tip = "这不是一条数据"
        }
    }
})
export default store;