<template>
  <div class="login_main">
    <b-navbar type="dark" variant="dark" style="padding:0.5rem 3rem">
      <b-navbar-brand href="#" style="font-size:1.5rem; color:#9d9d89">尚筹网-创意产品众筹平台</b-navbar-brand>
    </b-navbar>
    <b-container style="padding:5% 20%">
      <b-form @submit.prevent="submit">
        <b-form-group>
          <h2>
            <b-icon icon="person-fill"></b-icon>用户登录
          </h2>
        </b-form-group>
        <b-form-group>
          <b-input-group>
            <b-form-input
              required
              placeholder="请输入登录账号"
              v-model="account"
              :state="validateAccount"
              @focus="focus('account')"
              @blur="blur('account')"
            ></b-form-input>
            <b-input-group-append is-text>
              <b-icon icon="person-fill"></b-icon>
            </b-input-group-append>
          </b-input-group>
          <b-form-invalid-feedback :state="validateAccount">用户登录账号不能为空，请输入</b-form-invalid-feedback>
          <b-form-valid-feedback :state="validateAccount">好的</b-form-valid-feedback>
        </b-form-group>
        <b-form-group>
          <b-input-group>
            <b-form-input
              type="password"
              required
              placeholder="请输入登录密码"
              v-model="password"
              :state="validatePassword"
              @focus="focus('password')"
              @blur="blur('password')"
            ></b-form-input>
            <b-input-group-append is-text>
              <b-icon icon="lock-fill"></b-icon>
            </b-input-group-append>
          </b-input-group>
          <b-form-invalid-feedback :state="validatePassword">用户登录密码不能为空，请输入</b-form-invalid-feedback>
          <b-form-valid-feedback :state="validatePassword">好的</b-form-valid-feedback>
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
import { login } from "../ajax/ajax.js";
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
      account: "",
      password: "",
      food: "member",
      roles: [
        { text: "会员", value: "member" },
        { text: "管理", value: "user" }
      ],
      isfocus: { accountFocus: false, passwordFocus: false }
    };
  },
  methods: {
    submit() {
      const layerid = this.$layer.loading({ content: "正在登陆中..." });
      login({
        account: this.account,
        userpassword: this.password
      }).then(response => {
        this.$layer.close(layerid);
        if (response.data == "fail") {
          // 登陆失败
          this.$layer.msg("用户名或密码错误！", { time: 3 });
        } else {
          // 登录成功
          this.error = false;
          this.$router.push("/main");
        }
      });
    },
    focus(type) {
      if (type == "account") {
        this.isfocus.accountFocus = true;
      } else if (type == "password") {
        this.isfocus.passwordFocus = true;
      }
    },
    blur(type) {
      setTimeout(() => {
        if (type == "account") {
          this.isfocus.accountFocus = false;
        } else if (type == "password") {
          this.isfocus.passwordFocus = false;
        }
      }, 500);
    }
  },
  computed: {
    validateAccount() {
      return this.isfocus.accountFocus ? this.account != "" : null;
    },
    validatePassword() {
      return this.isfocus.passwordFocus ? this.password != "" : null;
    }
  }
};
</script>

<style>
.login_main {
  height: 100%;
  background: #eee;
}
.error {
  color: red;
}
</style>