<template>
    <div>
        <b-breadcrumb :items="items" class="m-3"></b-breadcrumb>
        <b-form inline style="border:1px solid #ddd" class="m-3 p-3">
            <b-form-group label="未分配角色列表" label-class="select-label">
                <b-form-select v-model="selected" :options="options" select-size="10" style="width:7rem"></b-form-select>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
import Vue from "vue"
import {BreadcrumbPlugin,FormPlugin} from "bootstrap-vue"

Vue.use(BreadcrumbPlugin);
Vue.use(FormPlugin);

export default {
    data(){
        return{
            items:[
                {
                    text:"首页",
                    to:"/main"
                },
                {
                    text:"数据列表",
                    to:"/main/user"
                },
                {
                    text:"分配角色",
                    active:true
                }
            ],
            selected:"",
            options:[
                {text:"SE",value:"SE"},
                {text:"TL",value:"TL"},
                {text:"GL",value:"GL"},
                {text:"QA",value:"QA"},
                {text:"PM",value:"PM"}
            ]
        }
    }
}
</script>

<style>
.select-label{
    font-weight: bold;
}
</style>