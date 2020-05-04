<template>
  <div>
      <b-card>
          <b-card-header>
              数据列表
          </b-card-header>
          <b-card-body>
              <b-form inline>
                  <b-input-group prepend="查询条件">
                      <b-form-input placeholder="请输入查询条件"></b-form-input>
                  </b-input-group>
                  <b-button type="submit" variant="warning"><b-icon icon="search"></b-icon>查询</b-button>
              </b-form>
          </b-card-body>
      </b-card>
  </div>
</template>

<script>
import Vue from "vue"
import {CardPlugin,TablePlugin,FormPlugin,InputGroupPlugin} from "bootstrap-vue"

Vue.use(CardPlugin);
Vue.use(TablePlugin);
Vue.use(FormPlugin);
Vue.use(InputGroupPlugin);

export default {

}
</script>

<style>

</style>