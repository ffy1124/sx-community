<template>
    <div class="wrap">
        <div class="tit pl20 pr20 pt15 pb15">
            <h3>活动信息</h3>
            <p>活动地点：社区居委会活动室</p>
            <p>温馨提示：请携带有效证件前往，如省份证</p>
        </div> 
        <div class="signUp pl20 pr20 mt20 pt15 pb15">
            <h3>居民报名</h3>
            <el-form label-width="80px" :inline="true">
                <el-form-item label="姓名*" >
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="联系电话*">
                    <el-input v-model="form.tel"></el-input>
                </el-form-item>
                <el-form-item label="备注信息*">
                    <el-input v-model="form.msg"></el-input>
                </el-form-item>
            </el-form>
            <p><el-button type="primary" @click="addUser">报名</el-button></p>
        </div>
    </div>
</template>

<script>
export default {
    name:'registration',
    data (){
        return{
            form:{
                name: '文本框内容',
                tel: '文本框内容',
                msg: '文本框内容'
            }
        };
    },
    methods:{
        addUser(){
            this.$http.post('/admin/community/addUser',{
                username: this.form.name,
                tel: this.form.tel,
                msg: this.form.msg
            }).then((res)=>{
                if(res.data == 'success'){
                    this.$alert('报名成功', '提示', {
                        confirmButtonText: '知道了'
                    });
                }else{
                    this.$alert('该人员已经在名单中', '提示', {
                        confirmButtonText: '知道了'
                    });
                }
            });
            this.form.name = '';
            this.form.tel = '';
            this.form.msg = '';
        }
    }
}
</script>

<style scoped>
.wrap h3{
    line-height: 35px;
    font-size: 16px;
    font-weight: normal;
}
.tit{
    background-color: #fff;
}
.tit p{
    font-size: 14px;
    line-height: 35px;
}
.signUp{
    background-color: #fff;
}
.signUp p{
    text-align: center;
}
</style>
