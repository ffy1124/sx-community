<template>
  <div class="wrap">
    <p class="pt15 pl15">...>{{$store.state.title}}</p>
    <div class="tab pt15">
      <el-button @click="changeTo" :type="type1">信息管理</el-button>
      <el-button @click="change" :type="type2">活动管理</el-button>
    </div>
    <information v-if="isShow"></information>
    <active v-if="isChange"></active>
  </div>
</template>

<script>
import active from '../../../../components/active/active';
import information from '../../../../components/information/information';
export default {
    name: 'activity',
    data () {
      return{
        isShow:true,
        isChange:false,
        type1: 'primary',
        type2: ''
      };
    },
    components:{
      information,
      active
    },
    methods:{
      change () {
        this.isShow = !this.isShow;
        this.isChange = !this.isChange;
        this.type1 = '',
        this.type2 = 'primary'
      },
      changeTo(){
        this.isShow = !this.isShow;
        this.isChange = !this.isChange;
        this.type1 = 'primary',
        this.type2 = ''
      }
    }
};
</script>

<style scoped>
  .wrap p{
    text-align: left;
  }
  .tab{
      text-align: center;
  }
  .el-button{
    border-radius:8px;
    width:170px;
    height:42px;
  }
  .el-button--primary{
    margin-left: 10px;
    background:#01b0b9;
  }
</style>
