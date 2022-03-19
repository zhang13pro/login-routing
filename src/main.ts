import { createApp } from "vue"
import App from "./App.vue"
import ElementPlus from "element-plus"
// import router from "./router"
// import store from "./store"
// 路由守卫，做动态路由的地方
// import "./router/router-config"

const app = createApp(App)
app.use(ElementPlus).mount("#app")
