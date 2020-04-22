<template>
  <div>
    <b-navbar type="dark" variant="dark" style="padding:0.5rem 3rem">
      <b-navbar-brand href="#" style="font-size:1.5rem; color:#9d9d89">尚筹网-创意产品众筹平台</b-navbar-brand>
    </b-navbar>
    <b-container style="padding:5% 20%">
      <b-form @submit="submit">
        <b-form-group>
          <h2>
            <b-icon icon="person-fill"></b-icon>用户登录
          </h2>
        </b-form-group>
        <b-form-group>
          <b-input-group>
            <b-form-input required placeholder="请输入登录账号" name="loginacct"></b-form-input>
            <b-input-group-append is-text>
              <b-icon icon="person-fill"></b-icon>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
        <b-form-group>
          <b-input-group>
            <b-form-input type="password" required placeholder="请输入登录密码" name="userpswd"></b-form-input>
            <b-input-group-append is-text>
              <b-icon icon="lock-fill"></b-icon>
            </b-input-group-append> 
          </b-input-group>
        </b-form-group>
        <b-form-group>
          <b-form-select required :options="roles" v-model="food"></b-form-select>
        </b-form-group>
        <b-form-group>
          <b-form-checkbox value="remember-me">记住我</b-form-checkbox>
        </b-form-group>
        <b-form-group>
          <label style="margin-left:1.5rem">忘记密码</label>
          <b-link style="float:right">我要注册</b-link>
        </b-form-group>
        <b-button type="submit" variant="success" block>登录</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import {login} from "../ajax/ajax.js"
import Vue from "vue";
import {
  NavbarPlugin,
  FormPlugin,
  LayoutPlugin,
  LinkPlugin,
  ButtonPlugin,
  InputGroupPlugin
} from "bootstrap-vue";

Vue.use(NavbarPlugin);
Vue.use(FormPlugin);
Vue.use(LayoutPlugin);
Vue.use(LinkPlugin);
Vue.use(ButtonPlugin);
Vue.use(InputGroupPlugin);

export default {
  data() {
    return {
      food: "member",
      roles: [
        { text: "会员", value: "member" },
        { text: "管理", value: "user" }
      ]
    };
  },
  methods:{
    submit(event){
      event.preventDefault();
      login({});
    }
  }
};
</script>

<style>
</style>