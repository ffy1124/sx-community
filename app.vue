<template>
    <div id="wrap" v-loading="$store.state.loading">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
html,body{
    width: 100%;
    height: 100%;
    font-size: .14rem;
}
.el-message-box{
    z-index: 10000;
}
.el-loading-mask{
    z-index: 999;
}
.el-input__inner{
    height: 35px!important;
}
.el-pagination{
  text-align: right;
  margin-top: 20px;
}
.el-form-item__content{
    width: 100%!important;
}
.el-form-item[data-v-7d337cf9]{
    width: 80%!important;
}
.el-carousel__item[data-v-6920a440]{
    background-color: skyblue!important;
}
</style>
