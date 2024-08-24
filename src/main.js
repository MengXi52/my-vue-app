import { createApp } from 'vue'

//引入element Ui
import  ElementPlus  from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入路由
import router from './router'
//引入pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
//引入mock.js ；拦截数据
// import "@/api/mock.js"
// 引入api.js
import api from '@/api/api'


import App from './App.vue'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
//注册api
app.config.globalProperties.$api = api
app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
