<template>
  <div>
    <b-card no-body class="m-3">
      <b-card-header>
        <b-icon icon="grid3x3-gap"></b-icon>数据列表
      </b-card-header>
      <b-card-body>
        <b-form inline style="float:left" @submit.prevent="getUsersByAccount">
          <b-input-group prepend="查询条件">
            <b-form-input placeholder="请输入账号" class="mr-1" v-model="account"></b-form-input>
          </b-input-group>
          <b-button type="submit" style="background:#f0ad4e">
            <b-icon icon="search"></b-icon>查询
          </b-button>
        </b-form>
        <b-button variant="danger" @click="removeUsers" style="float:right">
          <b-icon icon="x-circle"></b-icon>删除
        </b-button>
        <b-button
          variant="primary"
          @click="$router.push('/main/user/addOrEdit')"
          style="float:right;margin:0 1rem"
        >
          <b-icon icon="plus-circle"></b-icon>新增
        </b-button>
        <hr class="line" />
        <b-table :fields="fields" :items="items" primary-key="index" striped hover bordered>
          <template v-slot:cell(check)="scope">
            <b-form-checkbox v-model="checked[scope.item.index-1]" :value="scope.item.id"></b-form-checkbox>
          </template>
          <template v-slot:head(check)>
            <b-form-checkbox @change="changeHeadCheckbox"></b-form-checkbox>
          </template>
          <template v-slot:cell(action)="scope">
            <b-button variant="success" class="mr-1" size="sm">
              <b-icon icon="check-box"></b-icon>
            </b-button>
            <b-button variant="primary" @click="editUser(scope.item)" class="mr-1" size="sm">
              <b-icon icon="brush"></b-icon>
            </b-button>
            <b-button variant="danger" size="sm" @click="removeUser(scope.item)">
              <b-icon icon="x-square"></b-icon>
            </b-button>
          </template>
          <template v-slot:custom-foot>
            <b-tr>
              <b-td colspan="6">
                <b-pagination
                  @change="changePage"
                  align="center"
                  aria-controls="user_table"
                  :total-rows="rows"
                  :per-page="perPage"
                  v-model="currentPage"
                  prev-text="上一页"
                  next-text="下一页"
                ></b-pagination>
              </b-td>
            </b-tr>
          </template>
        </b-table>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import Vue from "vue";
import { getUsers, deleteUser,deleteUsers } from "../../ajax/ajax.js";
import {
  CardPlugin,
  TablePlugin,
  FormPlugin,
  InputGroupPlugin,
  FormCheckboxPlugin,
  PaginationPlugin
} from "bootstrap-vue";

Vue.use(CardPlugin);
Vue.use(TablePlugin);
Vue.use(FormPlugin);
Vue.use(InputGroupPlugin);
Vue.use(FormCheckboxPlugin);
Vue.use(PaginationPlugin);

export default {
  data() {
    return {
      currentPage: 1,
      // 一页显示几行数据
      perPage: 5,
      // 记录总数
      rows: 0,
      // 搜索框内的账号
      account: "",
      fields: [
        {
          key: "index",
          label: "#"
        },
        {
          key: "check"
        },
        {
          key: "account",
          label: "账号"
        },
        {
          key: "username",
          label: "名称",
          tdClass: "nameStyle"
        },
        {
          key: "email",
          label: "邮箱地址"
        },
        {
          key: "action",
          label: "操作"
        }
      ],
      items: [],
      newItems: [],
      // 复选框的状态
      checked: []
    };
  },
  mounted() {
    getUsers({
      pagenum:1,
      pagesize:this.perPage
    }).then(response => {
      const data = response.data.data;
      this.changeId(data);
      this.newItems = data;
      this.items = data;
      this.rows = response.data.total;
    });
  },
  methods: {
    changePage(page) {
      const layerid = this.$layer.loading({ content: "正在查询" });
      getUsers({
        pagenum: page,
        pagesize: this.perPage,
        account: this.account
      }).then(response => {
        const data = response.data.data;
        this.changeId(data);
        this.items = data;
        this.rows = response.data.total;
        this.$layer.close(layerid);
      });
    },
    getUsersByAccount() {
      const layerid = this.$layer.loading({ content: "正在查询" });
      getUsers({
        account: this.account
      }).then(response => {
        this.items = response.data.data;
        this.rows = response.data.total;
        this.$layer.close(layerid);
      });
    },
    // 改变用户id的值
    changeId(data) {
      for (let index = 0; index < data.length; index++) {
        data[index].index = (this.currentPage - 1) * this.perPage + index + 1;
      }
    },
    editUser(user) {
      this.$router.push({
        path: "/main/user/addOrEdit",
        query: {
          id: user.id,
          account: user.account,
          username: user.username,
          email: user.email
        }
      });
    },
    removeUser(user) {
      this.$layer.confirm(
        `确实要删除用户信息【${user.username}】吗？`,
        { title: "提示" },
        layerid => {
          deleteUser({ id: user.id }).then(response => {
            if (response.data.result == "success") {
              this.$layer.close(layerid);
              this.$layer.msg(`删除${response.data.data}条用户信息`, {
                time: 3
              });
              this.newItems.splice(user.index - 1, 1);
              this.items = this.newItems;
            } else if (response.data.result == "fail") {
              this.$layer.close(layerid);
              this.$layer.msg("删除失败！", { time: 3 });
            }
          });
        }
      );
    },
    changeHeadCheckbox(checked) {
      const newChecked = [];
      if (checked) {
        for (let index = 0; index < this.items.length; index++) {
          newChecked[index] = this.items[index].id;
        }
        this.checked = newChecked;
      } else {
        for (let index = 0; index < this.items.length; index++) {
          newChecked[index] = false;
        }
        this.checked = newChecked;
      }
    },
    removeUsers() {
      if (this.checked.length == 0) {
        this.$layer.msg("请勾选用户信息的复选框", { time: 3 });
        return;
      }
      const checkedIds=[];
      for (let index = 0; index < this.checked.length; index++) {
        if (this.checked[index] != false && this.checked[index]!= undefined) {
          checkedIds.push(this.checked[index]);
      }
      if (checkedIds.length==0) {
        this.$layer.msg("请勾选用户信息的复选框", { time: 3 });
        return;
      }
      this.$layer.confirm("确实要删除所选的用户信息吗？",{title:"提示"},layerid => {
        deleteUsers({ids:checkedIds}).then(response => {
          if (response.data.result == "success") {
              this.$layer.close(layerid);
              this.$layer.msg(`删除${response.data.data}条用户信息`, {
                time: 3
              });
              for (let index = 0; index < this.checked.length; index++) {
                this.newItems.splice(this.checked[index].index-1,1);
              }
              this.items = this.newItems;
            } else if (response.data.result == "fail") {
              this.$layer.close(layerid);
              this.$layer.msg("删除失败！", { time: 3 });
            }
        });
      });
    }
  }
}
</script>

<style>
.nameStyle {
  color: #e43400;
}
.line {
  clear: both;
  margin-top: 3rem;
}
</style>