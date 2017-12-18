<template>
  <router-view></router-view>
</template>

<script>
export default {
    name:'one',
    created(){
      this.$store.commit('change_loading', true);
      this.$http.get('/admin/menu/entry').then(res=>{
        this.$store.commit('change_loading', false);
        this.$store.commit('update_meun',res.data.data);
      });
    }
};
</script>

<style>

</style>
