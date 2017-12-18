<template>
    <el-container>
        <sx-menu></sx-menu>
        <sx-main></sx-main>
    </el-container>
</template>

<script>
import sxMenu from '../sx_menu/sx_menu';
import sxMain from '../sx_main/sx_main';
export default {
    name: 'index',
    components:{
        sxMenu,
        sxMain
    }
};
</script>

<style>
.el-container {
  width: 100%;
  height: 100%;
}
.el-aside{
    color: rgb(255, 255, 255);
    background-color: rgb(84, 92, 100);
    color:#fff;
}
.sx_header{
    box-sizing: border-box;
}
.sx_header p{
    line-height: 30px;
    text-align: center;
}
.sx_header h3,.sx_header h4{
    text-align: center;
}
.sx_header h3{
    font-size: 16px;
}
.sx_header h4 img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
</style>
