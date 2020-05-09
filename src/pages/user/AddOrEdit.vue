<template>
  <div>
    <b-breadcrumb :items="items" class="m-3"></b-breadcrumb>
    <b-card header="表单数据" class="m-3">
      <b-form @submit.prevent="addOrEdit" ref="form">
        <b-form-group label="登录账号" label-for="account" label-class="input_label">
          <b-form-input
            v-model="account"
            id="account"
            required
            placeholder="请输入登录账号"
            oninvalid="setCustomValidity('账号不能为空')"
            oninput="setCustomValidity('')"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="用户名称" label-for="username" label-class="input_label">
          <b-form-input
            v-model="username"
            id="username"
            required
            placeholder="请输入用户名称"
            oninvalid="setCustomValidity('用户名不能为空')"
            oninput="setCustomValidity('')"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="邮箱地址" label-for="email" label-class="input_label">
          <b-form-input v-model="email" id="email" type="email" required placeholder="请输入邮箱地址"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="success" class="mr-1">
          <b-icon :icon="icon"></b-icon>
          {{submitText}}
        </b-button>
        <b-button type="reset" @click.prevent="reset" variant="danger">
          <b-icon icon="arrow-repeat"></b-icon>重置
        </b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import Vue from "vue";
import { addUser,editUser } from "../../ajax/ajax.js";
import {
  BadgePlugin,
  CardPlugin,
  FormPlugin,
  ButtonPlugin
} from "bootstrap-vue";

Vue.use(BadgePlugin);
Vue.use(CardPlugin);
Vue.use(FormPlugin);
Vue.use(ButtonPlugin);

export default {
  data() {
    return {
      id: 0,
      account: "",
      username: "",
      email: "",
      oddUser:{},
      items: [
        {
          text: "首页",
          to: "/main/control"
        },
        {
          text: "数据列表",
          to: "/main/user"
        },
        {
          text: "新增",
          active: true
        }
      ],
      submitText: "",
      icon: ""
    };
  },
  methods: {
    addOrEdit() {
      if (this.id == 0) {
        // 新增用户
        const layerid = this.$layer.loading({ content: "正在添加" });
        addUser({
          account: this.account,
          username: this.username,
          email: this.email
        }).then(response => {
          this.$layer.close(layerid);
          if (response.data == "success") {
            this.$layer.msg("新增成功", { time: 3 });
            this.$router.push("/main/user");
          } else if(response.data=="fail") {
            this.$layer.msg("新增失败！", { time: 3 });
          }
        });
      } else {
        // 修改用户
        const layerid = this.$layer.loading({ content: "正在修改" });
        editUser({
          id:this.id,
          account: this.account,
          username: this.username,
          email: this.email
        }).then(response => {
          this.$layer.close(layerid);
          if (response.data == "success") {
            this.$layer.msg("修改成功", { time: 3 });
            this.$router.push("/main/user");
          } else if(response.data=="fail") {
            this.$layer.msg("修改失败！", { time: 3 });
          }
        });
      }
    },
    reset(){
      if (this.id!=0) {
        // 文本框恢复原来的数据
        this.account=this.oddUser.account;
        this.username=this.oddUser.username;
        this.email=this.oddUser.email;
      }else if (this.id==0) {
        // 文本框置空
        this.$refs.form.reset();
      }
    }
  },
  mounted() {
    const user = this.$route.query;
    if (user.id) {
      this.oddUser=user;
      this.id = user.id;
      this.account = user.account;
      this.username = user.username;
      this.email = user.email;
      this.submitText = "修改";
      this.icon = "brush";
    } else {
      this.submitText = "新增";
      this.icon = "plus";
    }
  }
};
</script>

<style>
.input_label {
  font-weight: bold;
}
</style>