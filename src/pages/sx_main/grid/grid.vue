<template>
  <h1>网格化管理平台</h1>
</template>

<script>
export default {
    name:'two',
    created(){
      this.$store.commit('change_loading', true);
      this.$http.get('/admin/menu/grid').then(res=>{
        this.$store.commit('change_loading', false);
        this.$store.commit('update_meun',res.data.data);
      });
    }
};
</script>

<style>

</style>
