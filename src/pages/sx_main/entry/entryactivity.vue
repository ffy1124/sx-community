<template>
    <div class="wrap">
        <h3 class="pl20">...>{{$store.state.title}}</h3>
        <div class="activeList ml10 mr20 pl10 pr20 mbb20">
            <h2 class="pl20">活动列表</h2>
            <div class="swiper">
                <el-carousel :interval="4000" type="card" height="200px">
                    <el-carousel-item v-for="(item, index) in activeList" :key="index">
                    <p>{{ item.name }}</p>
                    <p>{{ item.startDate }}</p>
                    </el-carousel-item>
                </el-carousel>
            </div>  
        </div>
        <p class="pt10 pb10">
            <router-link :to="{name: 'registration'}" tag="button">活动信息与报名</router-link>
            <router-link :to="{name: 'management'}" tag="button">人员管理</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'entryactivity',
    data (){
        return{
            activeList: []
        };
    },
    created(){
        this.$http.post('/admin/community/actionUser').then((res)=>{
            this.activeList = res.data
        });
    }
}
</script>

<style scoped>
.active{
  background-color: #01b0b9;
  color: #fff;
}
.wrap{
    line-height: 35px;
    font-weight: normal;
    background: #efefef;
}
.wrap>h3{
    font-weight: normal;
}
p{
    text-align: center;
}
p button{
    height: 40px;
    line-height: 40px;
    border: none;
    display: inline-block;
    width: 150px;
    border-radius: 15px;
    margin-left: 20px;
    background-color: #fff;
}
.activeList{
    background: #fff;
}
.activeList h2{
    line-height: 40px;
    font-size: 15px;
    font-weight: blod;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.swiper p{
    font-size: 16px;
    color: #fff;
    margin-top: 40px;
}
</style>
