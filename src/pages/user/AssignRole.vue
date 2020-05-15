<template>
    <div>
        <b-breadcrumb :items="items" class="m-3"></b-breadcrumb>
        <b-form inline style="border:1px solid #ddd" class="m-3 p-3">
            <b-form-group label="未分配角色列表" label-class="select-label">
                <b-form-select v-model="selected1" :options="options1" select-size="10" style="width:7rem"></b-form-select>
            </b-form-group>
            <b-form-group class="m-4">
                <b-form-group class="m-4">
                    <b-button variant="outline-primary" @click="assign"><b-icon icon="chevron-compact-right"></b-icon></b-button>
                </b-form-group>
                <b-form-group class="m-4">
                    <b-button variant="outline-primary" @click="unassign"><b-icon icon="chevron-compact-left"></b-icon></b-button>
                </b-form-group>
            </b-form-group>
            <b-form-group label="已分配的角色列表" label-class="select-label">
                <b-form-select v-model="selected2" :options="options2" select-size="10" style="width:7rem"></b-form-select>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
import Vue from "vue"
import {BreadcrumbPlugin,FormPlugin,ButtonPlugin} from "bootstrap-vue"

Vue.use(BreadcrumbPlugin);
Vue.use(FormPlugin);
Vue.use(ButtonPlugin);

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
            selected1:"",
            selected2:"",
            options1:[
                {text:"SE",value:"SE"},
                {text:"TL",value:"TL"},
                {text:"GL",value:"GL"},
                {text:"QA",value:"QA"},
                {text:"PM",value:"PM"}
            ],
            options2:[
                {text:"QC",value:"QC"},
                {text:"PG",value:"PG"},
                {text:"SA",value:"SA"}
            ]
        }
    },
    methods:{
        assign(){
            for (let index = 0; index < this.options1.length; index++) {
                if (this.options1[index].text==this.selected1) {
                    this.options1.splice(index,1);
                }
            }
            this.options2.push({text:this.selected1,value:this.selected1});
        },
        unassign(){
            for (let index = 0; index < this.options2.length; index++) {
                if (this.options2[index].text==this.selected2) {
                    this.options2.splice(index,1);
                }
            }
            this.options1.push({text:this.selected2,value:this.selected2});
        }
    }
}
</script>

<style>
.select-label{
    font-weight: bold;
}
</style>