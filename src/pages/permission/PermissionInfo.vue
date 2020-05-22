<template>
  <b-card no-body class="m-3">
    <b-card-header>
      <b-icon icon="grid3x3-gap"></b-icon>数据列表
    </b-card-header>
    <b-card-body>
      <div>
        <ul id="treeDemo" class="ztree"></ul>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import Vue from "vue";
import { async } from "../../ajax/ajax.js";
import { CardPlugin } from "bootstrap-vue";

Vue.use(CardPlugin);

export default {
  data() {
    return {
      setting: { async }
    };
  },
  mounted() {
    $.fn.zTree.init($("#treeDemo"), this.setting);
  }
};
</script>

<style>
</style>