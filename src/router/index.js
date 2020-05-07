import Vue from "vue"
import VueRouter from "vue-router"
import Login from "../pages/Login.vue"
import Main from "../pages/Main.vue"
import UserInfo from "../pages/user/UserInfo.vue"
import Control from "../pages/Control.vue"
import Add from "../pages/user/Add.vue"

Vue.use(VueRouter);

export default new VueRouter({
    mode:"history",
    routes: [
        {
            path: "/",
            component: Login
        },
        {
            path: "/main",
            component: Main,
            redirect: "/main/control",
            children: [
                {
                    path: "control",
                    component:Control
                },
                {
                    path: "user",
                    component:UserInfo,
                },
                {
                    path:"user/add",
                    component:Add
                }
            ]
        }
    ]
})