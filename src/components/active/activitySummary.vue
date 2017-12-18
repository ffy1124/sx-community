<template>
  <div class="wrap">
       <uploader v-for="(v, k) in $store.state.imgArr" :delSpan="v.delSpan" :key="k" :index="k"></uploader>
        <h4 class="mt20 mb20"><el-button type="primary">保存并发布</el-button></h4>
  </div>
</template>

<script>
import uploader from '../upload/uploader';
export default {
    name:'activitySummary',
    components:{
        uploader
    }
}
</script>

<style scoped>
h4{
  text-align: center;
}
</style>
