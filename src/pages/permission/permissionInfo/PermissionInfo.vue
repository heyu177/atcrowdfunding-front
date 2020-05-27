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
import { async,deletePermission } from "../../../ajax/ajax.js";
import { CardPlugin } from "bootstrap-vue";

Vue.use(CardPlugin);

export default {
  data() {
    return {
      setting: {
        async,
        view: {
          selectedMulti: false,
          addDiyDom: function(treeId, treeNode) {
            var icoObj = $("#" + treeNode.tId + "_ico"); // tId = permissionTree_1, $("#permissionTree_1_ico")
            if (treeNode.icon) {
              icoObj
                .removeClass("button ico_docu ico_open")
                .addClass("fa fa-fw " + treeNode.icon)
                .css("background", "");
            }
          },
          addHoverDom:(treeId, treeNode) => {
            //   <a><span></span></a>
            var aObj = $("#" + treeNode.tId + "_a"); // tId = permissionTree_1, ==> $("#permissionTree_1_a")
            aObj.attr("href", "javascript:;");
            if (
              treeNode.editNameFlag ||
              $("#btnGroup" + treeNode.tId).length > 0
            )
              return;
            var s = '<span id="btnGroup' + treeNode.tId + '">';
            if (treeNode.level == 0) {
              s +=
                '<a class="btn btn-info dropdown-toggle btn-xs add" style="margin-left:10px;padding-top:0px;" >&nbsp;&nbsp;<i class="fa fa-fw fa-plus rbg "></i></a>';
            } else if (treeNode.level == 1) {
              s +=
                '<a class="btn btn-info dropdown-toggle btn-xs edit" style="margin-left:10px;padding-top:0px;" title="修改权限信息">&nbsp;&nbsp;<i class="fa fa-fw fa-edit rbg "></i></a>';
              if (treeNode.children == null) {
                s +=
                  '<a class="btn btn-info dropdown-toggle btn-xs delete" style="margin-left:10px;padding-top:0px;" >&nbsp;&nbsp;<i class="fa fa-fw fa-times rbg "></i></a>';
              }
              s +=
                '<a class="btn btn-info dropdown-toggle btn-xs add" style="margin-left:10px;padding-top:0px;" >&nbsp;&nbsp;<i class="fa fa-fw fa-plus rbg "></i></a>';
            } else if (treeNode.level == 2) {
              s +=
                '<a class="btn btn-info dropdown-toggle btn-xs edit" style="margin-left:10px;padding-top:0px;" title="修改权限信息">&nbsp;&nbsp;<i class="fa fa-fw fa-edit rbg "></i></a>';
              s +=
                '<a class="btn btn-info dropdown-toggle btn-xs delete" style="margin-left:10px;padding-top:0px;">&nbsp;&nbsp;<i class="fa fa-fw fa-times rbg "></i></a>';
            }

            s += "</span>";
            aObj.append(s);
            let addNodes = document.querySelectorAll("a.add");
            let editNodes=document.querySelectorAll("a.edit");
            let deleteNodes=document.querySelectorAll("a.delete");
            for (let index = 0; index < addNodes.length; index++) {
              addNodes[index].onclick = event => {
                event.preventDefault();
                this.$router.push({path:"/main/permission/addOrEdit",query:{id:treeNode.id}});
              };
            }
            for (let index = 0; index < editNodes.length; index++) {
              editNodes[index].onclick= event => {
                event.preventDefault();
                this.$router.push({path:"/main/permission/addOrEdit",query:{
                  id:treeNode.id,
                  name:treeNode.name,
                  url:treeNode.url
                }});
              }
            }
            for (let index = 0; index < deleteNodes.length; index++) {
              deleteNodes[index].onclick= event => {
                event.preventDefault();
                this.$layer.confirm(`确实要删除${treeNode.name}吗？`,layerid => {
                  this.$layer.close(layerid);
                  deletePermission({id:treeNode.id}).then(response => {
                    if (response.data=="success") {
                      this.$layer.msg("删除成功！",{time:3});
                      const treeObj=$.fn.zTree.getZTreeObj("treeDemo");
                      treeObj.reAsyncChildNodes(null,"refresh");
                    }else if (response.data=="fail") {
                      this.$layer.msg("删除失败！",{time:3});
                    }
                  })
                });
              }
            }
          },
          removeHoverDom: function(treeId, treeNode) {
            $("#btnGroup" + treeNode.tId).remove();
          }
        }
      }
    };
  },
  mounted() {
    $.fn.zTree.init($("#treeDemo"), this.setting);
  }
};
</script>

<style>
.fa {
  display: inline-block;
  width: 16px;
  height: 16px;
}
.fa-plus {
  background: url(./img/plus.png) no-repeat center center;
}
.fa-edit {
  background: url(./img/edit.png) no-repeat center center;
}
.fa-times {
  background: url(./img/delete.png) no-repeat center center;
}
</style>