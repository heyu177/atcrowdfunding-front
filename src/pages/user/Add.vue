<template>
  <div>
      <b-breadcrumb :items="items" class="m-3"></b-breadcrumb>
      <b-card header="表单数据" class="m-3">
          <b-form>
              <b-form-group label="登录账号" label-for="account" label-class="input_label">
                  <b-form-input id="account" required placeholder="请输入登录账号"></b-form-input>
              </b-form-group>
              <b-form-group label="用户名称" label-for="username" label-class="input_label">
                  <b-form-input id="username" required placeholder="请输入用户名称"></b-form-input>
              </b-form-group>
              <b-form-group label="邮箱地址" label-for="email" label-class="input_label">
                  <b-form-input id="email" type="email" required placeholder="请输入邮箱地址"></b-form-input>
              </b-form-group>
              <b-button variant="success" class="mr-1"><b-icon icon="plus"></b-icon>新增</b-button>
              <b-button variant="danger"><b-icon icon="arrow-repeat"></b-icon>重置</b-button>
          </b-form>
      </b-card>
  </div>
</template>

<script>
import Vue from "vue"
import {BadgePlugin,CardPlugin,FormPlugin,ButtonPlugin} from "bootstrap-vue"

Vue.use(BadgePlugin);
Vue.use(CardPlugin);
Vue.use(FormPlugin);
Vue.use(ButtonPlugin);

export default {
    data(){
        return{
            items:[
                {
                    text:"首页",
                    to:"/main/control"
                },
                {
                    text:"数据列表",
                    to:"/main/user"
                },
                {
                    text:"新增",
                    active:true
                }
            ]
        }
    }
}
</script>

<style>
.input_label{
    font-weight: bold;
}
</style>