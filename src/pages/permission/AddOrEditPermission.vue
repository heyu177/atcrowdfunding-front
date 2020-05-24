<template>
  <div>
    <b-breadcrumb :items="items" class="m-3"></b-breadcrumb>
    <b-card header="表单数据" class="m-3">
      <b-form @submit.prevent="addOrEdit" ref="form">
        <b-form-group label="许可名称" label-for="name" label-class="input_label">
          <b-form-input
            v-model="name"
            id="name"
            required
            placeholder="请输入许可名称"
            oninvalid="setCustomValidity('许可名称不能为空')"
            oninput="setCustomValidity('')"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="链接地址" label-for="url" label-class="input_label">
          <b-form-input
            v-model="url"
            id="url"
            required
            placeholder="请输入链接地址"
            oninvalid="setCustomValidity('链接地址不能为空')"
            oninput="setCustomValidity('')"
          ></b-form-input>
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
import {  } from "../../ajax/ajax.js";
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
      name: "",
      url: "",
      oddUser:{},
      items: [
        {
          text: "首页",
          to: "/main/control"
        },
        {
          text: "数据列表",
          to: "/main/permission"
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
}
</script>

<style>
.input_label {
  font-weight: bold;
}
</style>