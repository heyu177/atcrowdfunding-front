<template>
  <div>
      <b-card no-body>
          <b-card-header>
              <b-icon icon="clock-history" variant="primary"></b-icon> <b-link>控制面板</b-link>
          </b-card-header>
      </b-card>
      <b-card no-body>
          <b-card-header>
              <b-icon icon="card-heading" variant="dark"></b-icon> <b-link v-b-toggle.accordion-1 style="color:#000">权限管理</b-link>
              <b-badge class="ml-5" pill>3</b-badge>
          </b-card-header>
          <b-collapse id="accordion-1">
              <b-card-body>
                  <b-nav vertical>
                      <b-nav-item>xxx</b-nav-item>
                      <b-nav-item>xxx</b-nav-item>
                      <b-nav-item>xxx</b-nav-item>
                  </b-nav>
              </b-card-body>
          </b-collapse>
      </b-card>
      <b-card no-body>
          <b-card-header>
              <b-icon icon="check" variant="dark"></b-icon> <b-link v-b-toggle.accordion-2 style="color:#000">业务审核</b-link>
              <b-badge class="ml-5" pill>3</b-badge>
          </b-card-header>
          <b-collapse id="accordion-2">
              <b-card-body>
                  <b-nav vertical>
                      <b-nav-item>xxx</b-nav-item>
                      <b-nav-item>xxx</b-nav-item>
                      <b-nav-item>xxx</b-nav-item>
                  </b-nav>
              </b-card-body>
          </b-collapse>
      </b-card>
      <b-card no-body>
          <b-card-header>
              <b-icon icon="grid1x2-fill" variant="dark"></b-icon> <b-link v-b-toggle.accordion-3 style="color:#000">业务管理</b-link>
              <b-badge class="ml-5" pill>3</b-badge>
          </b-card-header>
          <b-collapse id="accordion-3">
              <b-card-body>
                  <b-nav vertical>
                      <b-nav-item>xxx</b-nav-item>
                      <b-nav-item>xxx</b-nav-item>
                      <b-nav-item>xxx</b-nav-item>
                  </b-nav>
              </b-card-body>
          </b-collapse>
      </b-card>
      <b-card no-body>
          <b-card-header>
              <b-icon icon="card-list" variant="primary"></b-icon> <b-link>参数管理</b-link>
          </b-card-header>
      </b-card>
  </div>
</template>

<script>
import Vue from "vue"
import {CardPlugin,CollapsePlugin,LinkPlugin,BadgePlugin,NavPlugin} from "bootstrap-vue"

Vue.use(CardPlugin);
Vue.use(CollapsePlugin);
Vue.use(LinkPlugin);
Vue.use(BadgePlugin);
Vue.use(NavPlugin);

export default {

}
</script>

<style>

</style>