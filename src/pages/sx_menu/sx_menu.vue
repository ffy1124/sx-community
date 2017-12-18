<template>
    <el-aside>
            <el-row class="tac">
                <el-col :span="24">
                    <div class="pt20 sx_header">
                        <h3>三鑫智慧社区</h3>
                        <p class="pt5 pb5">公共管理平台</p>
                        <h4><img src="../../../static/images/header.jpg" alt="img"></h4>
                        <p class="pt5 pb5"><span>管理员 {{$store.state.username}}</span></p>
                    </div>
                    <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                        <div v-for="(v, k) in $store.state.menuData" :key="k">
                            <el-submenu :index='k.toString()' v-if="v.submenus">
                                <template slot="title">
                                    <span>{{v.name}}</span>
                                </template>
                                <div class="div" v-for="(item, index) in v.submenus" :key="index">
                                    <el-submenu v-if="item.submenus" :index="k.toString()+'-'+index.toString()">
                                        <template slot="title">
                                            {{item.name}}
                                        </template>
                                        <el-menu-item :index="k.toString()+'-'+index.toString()+'-'+i.toString()" v-for="(val, i) in item.submenus" :key="i" @click="change_Router(val.type, val.id, val.name)">
                                            <el-submenu v-if="val.submenus" :index="k.toString()+'-'+index.toString()+'-'+i.toString()">
                                                <template slot="title">
                                                    {{val.name}}
                                                </template>
                                            </el-submenu>
                                            <el-menu-item v-else-if="!val.submenus" :index="k.toString()+'-'+index.toString()+'-'+i.toString()">
                                                {{val.name}}
                                            </el-menu-item>
                                        </el-menu-item>
                                    </el-submenu>
                                    <el-menu-item v-else-if="!item.submenus" :index="k.toString()+'-'+index.toString()">
                                        {{item.name}}
                                    </el-menu-item>
                                </div>
                            </el-submenu>
                            <el-menu-item v-else-if="!v.submenus" :index="k.toString()">
                                {{v.name}}
                            </el-menu-item>
                        </div>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
</template>

<script>
export default {
    name: 'sx_menu',
    data () {
        return {
            sx_data:null,
            isShow: false
        };
    },
    methods:{
        change_Router (type, id, name) {
            if(type != 'entryActivity' && type != 'activity'){
                type = 'entryActivity'
            }
            this.$store.commit('update_title', name);
            this.$router.push({
                name:type,
                params:{
                    id:id
                }
            });
            console.log(type);
        },
        show (){
            alert('111');
        }
    }
}
</script>

<style scoped>
aside{
    padding-right: 1px;
}
.el-menu{
    border: none;
}
.el-submenu__title{
    height:53px!important;
    line-height: 53px!important;
}
</style>
