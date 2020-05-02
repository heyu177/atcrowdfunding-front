<template>
  <div>
      <b-card>
          <b-card-header>
              <b-icon icon="clock-history" variant="primary"></b-icon> <b-link>控制面板</b-link>
          </b-card-header>
      </b-card>
  </div>
</template>

<script>
import Vue from "vue"
import {CardPlugin,CollapsePlugin,LinkPlugin} from "bootstrap-vue"

Vue.use(CardPlugin);
Vue.use(CollapsePlugin);
Vue.use(LinkPlugin);

export default {

}
</script>

<style>

</style>