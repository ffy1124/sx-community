<template>
    <el-main>
        <el-row>
            <el-col :span="14">
              <div class="nav">
                <router-link :to="{name:'entry'}">一口式受理平台</router-link>
                <router-link :to="{name:'grid'}">网格化管理平台</router-link>
                <router-link :to="{name:'publicService'}">公共服务平台</router-link>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="nav_right">
                <span><i class="el-icon-bell ml20 mr20"></i><el-badge class="mark" :value="12" /></span>
                <span><i class="el-icon-message ml20 mr20"></i><el-badge class="mark" :value="12" /></span>
                <span class="header mr15"><img src="../../../static/images/header.jpg" alt="img"></span>
                <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link pr20">
                    管理员 {{$store.state.username}}
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>退出</el-dropdown-item>
                    <el-dropdown-item>选项一</el-dropdown-item>
                    <el-dropdown-item>选项二</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </el-col>
        </el-row>
        <router-view></router-view>
    </el-main>
</template>

<script>
import { delCookie } from '../../utils/utils';
export default {
    name:'sx_main',
    methods: {
      handleCommand(command) {
        this.$router.push({name: 'login'});
        delCookie('token');
      }
    }
}
</script>

<style scoped>
span{
  position: relative;
  display: inline-block;
  margin-right: 10px;
}
span .mark{
  position: absolute;
  top: -5px;
  right: -5px;
}
.el-main{
    padding:0;
}
.el-row{
  height: 40px;
  line-height: 40px;
}
.nav{
  display: flex;
}
.nav a{
  flex:1;
  text-align: center;
  font-size: 16px;
}
.active{
  background-color: #01b0b9;
  color: #fff;
}
.header img{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  vertical-align: top;
  margin-top: 5px;
}
.nav_right{
  text-align: right;
  line-height: 40px;
}
.nav_right i{
  font-size: 20px;
}
.el-input__inner{
  border:none!important;
}
</style>
