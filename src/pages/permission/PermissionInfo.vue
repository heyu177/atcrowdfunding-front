<template>
  <div>
    <ul id="treeDemo" class="ztree"></ul>
  </div>
</template>

<script>
import {async} from "../../ajax/ajax.js"
export default {
  data() {
    return {
      setting:{async}
    };
  },
  mounted(){
      $.fn.zTree.init($("#treeDemo"), this.setting);
  }
};
</script>

<style>
</style>