<template>
    <div class="wrap">
        <form>
            <p class="mt15 mb15">
                <label class="mr20">登录名：</label>
                <input type="text" placeholder="请输入你的姓名" v-model.trim="username">
            </p>
            <p class="mt15 mb15">
                <label class="mr20">密码：</label>
                <input type="password" placeholder="请输入你的密码" v-model.trim="password">
            </p>
            <p class="btn pt20">
                <button @click="sx_login" class="ml10 mr5" type="button">登录</button>
            </p>
        </form>
    </div> 
</template>

<script>
import { setCookie } from "../../utils/utils";
export default {
    name:'login',
    data () {
        return{
            username: '',
            password: ''
        };
    },
    methods:{
        sx_login () {
            this.$store.commit('change_loading', true);
            this.$http.post('/admin/loginUser',{
                username: this.username,
                password: this.password,
            }).then((res) => {
                setTimeout(() => {
                    if(res.data.code === 1){
                    setCookie('token', res.data.token);
                    this.$store.commit('getUsername',this.username);
                    this.$router.push({name:'publicService'});
                    }else{
                        this.$store.commit('change_loading', false);
                        this.$alert(res.data.msg, '错误信息', {
                        confirmButtonText: '确定',
                        callback: action => {
                           this.$router.push({name: 'register'})
                        }
                        });
                    }
                    this.$store.commit('change_loading', false);
                }, 2000);
            });
        }
    },
    mounted: function(){
        
    }
}
</script>

<style scoped>
    .wrap{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center
    }
    .wrap form{
        width: 70%;
    }
    .wrap p{
        line-height: 35px;
    }
    .wrap p input{
        border: 1px solid #ccc;
        height: 35px;
        width: 100%;
        padding-left: 10px;
    }
    .btn{
        display: flex;
    }
    .btn button{
        flex: 1;
        border: 1px solid #ccc;
        height: 35px;
        background-color: skyblue;
        color:#fff;
    }
</style>
