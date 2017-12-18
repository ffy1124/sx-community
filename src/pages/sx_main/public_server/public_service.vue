<template>
  <router-view></router-view>
</template>
<script>
export default {
    name: 'three',
    created(){
      this.$store.commit('change_loading', true);
      this.$http.get('/admin/menu/public_service').then(res=>{
        this.$store.commit('change_loading', false);
        this.$store.commit('update_meun',res.data.data);
      });
    }
}
</script>
<style scoped>
  .wrap{
    background:#eeeeee;
    width: 100%;
    height: 93%;
  }
  .wrap p{
    line-height: 30px;
    font-family:MicrosoftYaHei;
    font-size:14px;
    color:#898989;
    text-align:left;
  }
</style>
