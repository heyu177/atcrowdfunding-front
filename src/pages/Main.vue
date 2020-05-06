<template>
  <div style="height:100%">
    <b-navbar
      id="navTop"
      type="dark"
      variant="dark"
      style="padding:0 1rem;position:fixed;left:0;top:0;right:0;z-index:2"
    >
      <b-navbar-brand href="#" style="font-size:2rem;color:#9d9d9d">众筹平台 - 控制面板</b-navbar-brand>
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
    </b-navbar>
    <b-container fluid style="height:100%">
      <b-row style="height:100%">
        <b-col
          id="navLeft"
          sm="3"
          md="2"
          style="height:100%;background:#f5f5f5;position:fixed;left:0;bottom:0;z-index:1;overflow:auto"
        >
          <Menu />
        </b-col>
        <b-col sm="9" md="10" style="z-index:0;position:absolute" id="table">
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
  ImagePlugin
} from "bootstrap-vue";

Vue.use(NavPlugin);
Vue.use(NavbarPlugin);
Vue.use(FormInputPlugin);
Vue.use(ButtonPlugin);
Vue.use(ButtonGroupPlugin);
Vue.use(LayoutPlugin);
Vue.use(ImagePlugin);

export default {
  data() {
    return {
      username: ""
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
    const navLeft = document.querySelector("#navLeft");
    const navTop = document.querySelector("#navTop");
    navLeft.style.top = navTop.clientHeight+"px";
    const table=document.querySelector("#table");
    table.style.left=navLeft.clientWidth+"px";
    table.style.top=navTop.clientHeight+"px";

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