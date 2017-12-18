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
                <button class=" ml5 mr10" type="button" @click="sx_register">注册</button>
            </p>
        </form>
    </div>
</template>

<script>
export default {
    name:'login',
    data () {
        return{
            username: '',
            password: ''
        };
    },
    methods:{
        sx_register () {
            this.$http.post('/admin/registerUser',{
                username: this.username,
                password: this.password
            }).then((res) => {
                console.log(res);
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
        align-items: center;
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
