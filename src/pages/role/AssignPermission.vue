<template>
  <div>
    <b-breadcrumb :items="items" class="m-3"></b-breadcrumb>
    <b-card no-body class="m-3">
      <b-card-header>
        <b-icon icon="grid3x3-gap"></b-icon>数据列表
      </b-card-header>
      <b-card-body>
        <b-button variant="success" @click="doAssign">分配许可</b-button>
        <div>
          <ul id="treeDemo" class="ztree"></ul>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import Vue from "vue";
import { CardPlugin, BreadcrumbPlugin,ButtonPlugin } from "bootstrap-vue";
import { asyncUrl,assignPermission } from "../../ajax/ajax.js";

Vue.use(CardPlugin);
Vue.use(BreadcrumbPlugin);
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
          text: "角色列表",
          to: "/main/role"
        },
        {
          text: "分配许可",
          active: true
        }
      ],
      setting:{
        async:{
          enable:true,
          url:asyncUrl,
          otherParam:["roleId",this.$route.params.id]
        },
        check:{
          enable:true
        }
      }
    };
  },
  mounted() {
    $.fn.zTree.init($("#treeDemo"), this.setting);
  },
  methods:{
    doAssign(){
      var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
      var nodes = treeObj.getCheckedNodes(true);
      if (nodes.length==0) {
        this.$layer.msg("请选择需要分配的许可信息",{time:3});
      }else{
        const permissionIds=[];
        for (let index = 0; index < nodes.length; index++) {
          permissionIds[index]=nodes[index].id;
        }
        assignPermission({
          roleId:this.$route.params.id,
          permissionIds
        }).then(response => {
          if (response.data=="success") {
            this.$layer.msg("分配成功！",{time:3});
          }else if (response.data=="fail") {
            this.$layer.msg("分配失败！",{time:3});
          }
        });
      }
    }
  }
};
</script>

<style>
</style>