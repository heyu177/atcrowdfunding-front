<template>
  <div>
    <ul id="treeDemo" class="ztree"></ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      setting:{},
      zNodes: [
        {
          name: "test1",
          open: true,
          children: [{ name: "test1_1" }, { name: "test1_2" }]
        },
        {
          name: "test2",
          open: true,
          children: [{ name: "test2_1" }, { name: "test2_2" }]
        }
      ]
    };
  },
  mounted(){
      $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
  }
};
</script>

<style>
</style>