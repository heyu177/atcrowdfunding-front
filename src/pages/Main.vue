<template>
  <div style="height:100%">
    <b-navbar
      id="navTop"
      type="dark"
      variant="dark"
      toggleable="lg"
      style="padding:0 1rem;position:fixed;left:0;top:0;right:0;z-index:2"
    >
      <b-navbar-brand href="#" style="font-size:1.8rem;color:#9d9d9d">众筹平台 - 控制面板</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav-collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-form class="m-2">
            <b-form-input placeholder="查询"></b-form-input>
          </b-nav-form>
          <b-button-group class="m-2">
            <b-dropdown variant="success">
              <template v-slot:button-content>
                <b-icon icon="person-fill"></b-icon>
                {{username}}
              </template>
              <b-dropdown-item>个人设置</b-dropdown-item>
              <b-dropdown-item>消息</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item @click="logout">退出系统</b-dropdown-item>
            </b-dropdown>
          </b-button-group>
          <b-button class="m-2" variant="danger">
            <b-icon icon="question-circle-fill"></b-icon>帮助
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container fluid style="height:100%">
      <b-row style="height:100%">
        <b-col
          id="navLeft"
          sm="3"
          md="2"
          style="background:#f5f5f5;position:fixed;left:0;z-index:1;overflow:auto"
        >
          <b-sidebar id="sidebar" shadow v-model="visible" :width="sidebarWidth" :no-close-on-route-change="!isMobile">
            <Menu/>
          </b-sidebar>
        </b-col>
        <b-col sm="9" md="10" style="z-index:0;position:absolute" id="table">
          <b-button v-if="isMobile" v-b-toggle.sidebar class="ml-3 mt-1"><b-icon icon="backspace"></b-icon> 返回</b-button>
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import Menu from "../components/Menu.vue";
import { getUsername, doLogout } from "../ajax/ajax.js";
import {
  NavPlugin,
  NavbarPlugin,
  FormInputPlugin,
  ButtonPlugin,
  ButtonGroupPlugin,
  LayoutPlugin,
  ImagePlugin,
  CollapsePlugin,
  SidebarPlugin
} from "bootstrap-vue";

Vue.use(NavPlugin);
Vue.use(NavbarPlugin);
Vue.use(FormInputPlugin);
Vue.use(ButtonPlugin);
Vue.use(ButtonGroupPlugin);
Vue.use(LayoutPlugin);
Vue.use(ImagePlugin);
Vue.use(CollapsePlugin);
Vue.use(SidebarPlugin);

export default {
  data() {
    return {
      username: "",
      visible:true,
      sidebarWidth:"16.666667%",
      isMobile:false
    };
  },
  components: {
    Menu
  },
  methods: {
    logout() {
      doLogout().then(response => {
        if (response.data == "success") {
          this.$router.push("/");
        }
      });
    }
  },
  mounted() {
    const screenWidth=document.documentElement.clientWidth;
    const navLeft = document.querySelector("#navLeft");
    const table = document.querySelector("#table");
    if (screenWidth>=992) {
      this.sidebarWidth="16.666667%";
      table.style.left = navLeft.clientWidth + "px";
    } else{
      this.sidebarWidth="100%";
      this.isMobile=true
    }
    // const navTop = document.querySelector("#navTop");
    navLeft.style.top = "53.2px";
    table.style.top = "53.2px";
    getUsername().then(response => {
      if (response.data.result == "success") {
        this.username = response.data.username;
      }
    });
  }
};
</script>

<style>
.title {
  padding: 1rem;
  border-bottom: 1px solid #f4f4f4;
}
</style>