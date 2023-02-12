import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
//import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// 引入mocks，测试接口
if (process.env.NODE_ENV === "development") {
    require("./mock");
}
app.use(store).use(router).use(ElementPlus).mount('#app')
