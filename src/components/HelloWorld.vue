<template>
  <div>
    <b-button>按钮</b-button>
    <b-button variant="danger">Button</b-button>
    <b-button variant="success">Button</b-button>
    <b-button variant="outline-primary">Button</b-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { ButtonPlugin } from "bootstrap-vue";
Vue.use(ButtonPlugin);
export default {
  /* components: {
    "b-button": BButton
  } */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
