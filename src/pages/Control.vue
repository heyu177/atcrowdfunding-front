<template>
  <div ref="root">
    <h1 class="title">控制面板</h1>
    <b-row>
      <b-col sm="6" lg="3" style="text-align:center">
        <b-img rounded="circle" data-src="holder.js/200x200?theme=sky"></b-img>
        <h4>Label</h4>
        <span>Something else</span>
      </b-col>
      <b-col sm="6" lg="3" style="text-align:center">
        <b-img rounded="circle" data-src="holder.js/200x200?theme=vine"></b-img>
        <h4>Label</h4>
        <span>Something else</span>
      </b-col>
      <b-col sm="6" lg="3" style="text-align:center">
        <b-img rounded="circle" data-src="holder.js/200x200?theme=sky"></b-img>
        <h4>Label</h4>
        <span>Something else</span>
      </b-col>
      <b-col sm="6" lg="3" style="text-align:center">
        <b-img rounded="circle" data-src="holder.js/200x200?theme=vine"></b-img>
        <h4>Label</h4>
        <span>Something else</span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Vue from "vue";
import "holder/holder.js"
import { LayoutPlugin } from "bootstrap-vue";

Vue.use(LayoutPlugin);

export default {
  
};
</script>

<style>
</style>