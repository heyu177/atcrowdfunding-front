import Vue from "vue"
import VueRouter from "vue-router"
import Login from "../pages/Login.vue"
import Main from "../pages/Main.vue"

Vue.use(VueRouter);

export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:"/",
            component:Login
        },
        {
            path:"/main",
            component:Main
        }
    ]
})