<template>
  <div>
    <b-breadcrumb :items="items" class="m-3"></b-breadcrumb>
    <b-form inline style="border:1px solid #ddd" class="m-3 p-3">
      <b-form-group label="未分配角色列表" label-class="select-label">
        <b-form-select v-model="selected1" :options="options1" select-size="10" style="width:14rem"></b-form-select>
      </b-form-group>
      <b-form-group class="m-4">
        <b-form-group class="m-4">
          <b-button variant="outline-primary" @click="assign">
            <b-icon icon="chevron-compact-right"></b-icon>
          </b-button>
        </b-form-group>
        <b-form-group class="m-4">
          <b-button variant="outline-primary" @click="unassign">
            <b-icon icon="chevron-compact-left"></b-icon>
          </b-button>
        </b-form-group>
      </b-form-group>
      <b-form-group label="已分配的角色列表" label-class="select-label">
        <b-form-select v-model="selected2" :options="options2" select-size="10" style="width:14rem"></b-form-select>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import Vue from "vue";
import { BreadcrumbPlugin, FormPlugin, ButtonPlugin } from "bootstrap-vue";
import { getRoles, assignRole, unAssignRole } from "../../ajax/ajax.js";

Vue.use(BreadcrumbPlugin);
Vue.use(FormPlugin);
Vue.use(ButtonPlugin);

export default {
  data() {
    return {
      items: [
        {
          text: "首页",
          to: "/main"
        },
        {
          text: "数据列表",
          to: "/main/user"
        },
        {
          text: "分配角色",
          active: true
        }
      ],
      selected1: "",
      selected2: "",
      options1: [],
      options2: []
    };
  },
  methods: {
    assign() {
      if (this.selected1 == "" || this.selected1 == null) {
        this.$layer.msg("请选择需要分配的角色", { time: 3 });
        return;
      }
      assignRole({
        userId: this.$route.params.id,
        roleId: this.selected1
      }).then(response => {
        if (response.data == "success") {
          this.$layer.msg("分配成功！", { time: 3 });
          let text1 = "";
          for (let index = 0; index < this.options1.length; index++) {
            const option = this.options1[index];
            if (option.value == this.selected1) {
              text1 = option.text;
              break;
            }
          }
          for (let index = 0; index < this.options1.length; index++) {
            if (this.options1[index].value == this.selected1) {
              this.options1.splice(index, 1);
            }
          }
          this.options2.push({ text: text1, value: this.selected1 });
          this.selected1 = "";
        } else if (response.data == "fail") {
          this.$layer.msg("分配失败！", { time: 3 });
        }
      });
    },
    unassign() {
      if (this.selected2 == "" || this.selected2 == null) {
        this.$layer.msg("请选择需要取消的角色", { time: 3 });
        return;
      }
      unAssignRole({
        userId: this.$route.params.id,
        roleId: this.selected2
      }).then(response => {
        if (response.data == "success") {
          this.$layer.msg("取消分配成功！", { time: 3 });
          let text2 = "";
          for (let index = 0; index < this.options2.length; index++) {
            const option = this.options2[index];
            if (option.value == this.selected2) {
              text2 = option.text;
              break;
            }
          }
          for (let index = 0; index < this.options2.length; index++) {
            if (this.options2[index].value == this.selected2) {
              this.options2.splice(index, 1);
            }
          }
          this.options1.push({ text: text2, value: this.selected2 });
          this.selected2 = "";
        } else if (response.data == "fail") {
            this.$layer.msg("取消分配失败！", { time: 3 });
        }
      });
    }
  },
  mounted() {
    let id = this.$route.params.id;
    getRoles({ id }).then(response => {
      const roles = response.data;
      for (let index = 0; index < roles.length; index++) {
        const role = roles[index];
        if (role.user == null) {
          this.options1.push({ text: role.name, value: role.id });
        } else {
          this.options2.push({ text: role.name, value: role.id });
        }
      }
    });
  }
};
</script>

<style>
.select-label {
  font-weight: bold;
}
</style>