<template>
  <div>
      <b-card no-body>
          <b-card-header>
              <b-icon icon="clock-history" variant="primary"></b-icon> <b-link to="/main/control">控制面板</b-link>
          </b-card-header>
      </b-card>
      <b-card no-body>
          <b-card-header v-b-toggle.accordion-1 style="cursor:pointer">
              <b-icon icon="card-heading" variant="dark"></b-icon> <b-link style="color:#000;text-decoration:none">权限管理</b-link>
              <b-badge style="float:right" pill>3</b-badge>
          </b-card-header>
          <b-collapse id="accordion-1">
              <b-card-body>
                  <b-nav vertical style="font-size:0.8rem">
                      <b-nav-item to="/main/user"><b-icon icon="person-fill"></b-icon>用户维护</b-nav-item>
                      <b-nav-item><b-icon icon="person-bounding-box"></b-icon>角色维护</b-nav-item>
                      <b-nav-item><b-icon icon="lock-fill"></b-icon>权限维护</b-nav-item>
                  </b-nav>
              </b-card-body>
          </b-collapse>
      </b-card>
      <b-card no-body>
          <b-card-header v-b-toggle.accordion-2 style="cursor:pointer">
              <b-icon icon="check" variant="dark"></b-icon> <b-link style="color:#000;text-decoration:none">业务审核</b-link>
              <b-badge style="float:right" pill>3</b-badge>
          </b-card-header>
          <b-collapse id="accordion-2">
              <b-card-body>
                  <b-nav vertical style="font-size:0.8rem">
                      <b-nav-item><b-icon icon="check-box"></b-icon>实名认证审核</b-nav-item>
                      <b-nav-item><b-icon icon="check-box"></b-icon>广告审核</b-nav-item>
                      <b-nav-item><b-icon icon="check-box"></b-icon>项目审核</b-nav-item>
                  </b-nav>
              </b-card-body>
          </b-collapse>
      </b-card>
      <b-card no-body>
          <b-card-header v-b-toggle.accordion-3 style="cursor:pointer">
              <b-icon icon="grid1x2-fill" variant="dark"></b-icon> <b-link style="color:#000;text-decoration:none">业务管理</b-link>
              <b-badge style="float:right" pill>7</b-badge>
          </b-card-header>
          <b-collapse id="accordion-3">
              <b-card-body>
                  <b-nav vertical style="font-size:0.8rem">
                      <b-nav-item><b-icon icon="image"></b-icon> 资质维护</b-nav-item>
                      <b-nav-item><b-icon icon="grid3x3-gap-fill"></b-icon> 分类管理</b-nav-item>
                      <b-nav-item><b-icon icon="arrow-up-down"></b-icon> 流程管理</b-nav-item>
                      <b-nav-item><b-icon icon="card-text"></b-icon> 广告管理</b-nav-item>
                      <b-nav-item><b-icon icon="chat-square-dots-fill"></b-icon> 消息模板</b-nav-item>
                      <b-nav-item><b-icon icon="list-ul"></b-icon> 项目分类</b-nav-item>
                      <b-nav-item><b-icon icon="bookmarks-fill"></b-icon> 项目标签</b-nav-item>
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