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
        <b-button variant="danger" style="float:right">
          <b-icon icon="x-circle"></b-icon>删除
        </b-button>
        <b-button variant="primary" @click="$router.push('/main/user/add')" style="float:right;margin:0 1rem">
          <b-icon icon="plus-circle"></b-icon>新增
        </b-button>
        <hr class="line" />
        <b-table :fields="fields" :items="items" primary-key="id" striped hover bordered>
          <template v-slot:cell(check)>
            <b-form-checkbox></b-form-checkbox>
          </template>
          <template v-slot:head(check)>
            <b-form-checkbox></b-form-checkbox>
          </template>
          <template v-slot:cell(action)>
            <b-button variant="success" class="mr-1" size="sm">
              <b-icon icon="check-box"></b-icon>
            </b-button>
            <b-button variant="primary" class="mr-1" size="sm">
              <b-icon icon="brush"></b-icon>
            </b-button>
            <b-button variant="danger" size="sm">
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
import { getUsers } from "../../ajax/ajax.js";
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
      perPage: 2,
      // 记录总数
      rows: 0,
      // 搜索框内的账号
      account:"",
      fields: [
        {
          key: "id",
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
      items: []
    };
  },
  mounted() {
    getUsers().then(response => {
      this.items = response.data.data;
      this.rows = response.data.total;
    });
  },
  methods: {
    changePage(page) {
      const layerid=this.$layer.loading({content:"正在查询"})
      getUsers({
        pagenum: page,
        pagesize: this.perPage,
        account:this.account
      }).then(response => {
        this.items = response.data.data;
        this.rows = response.data.total;
        this.$layer.close(layerid);
      });
    },
    getUsersByAccount(){
      const layerid=this.$layer.loading({content:"正在查询"})
      getUsers({
        account:this.account
      }).then(response => {
        this.items = response.data.data;
        this.rows = response.data.total;
        this.$layer.close(layerid);
      });
    }
  }
};
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