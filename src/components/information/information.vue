<template>
  <div class="box pl15 pr15">
    <h3>基本信息</h3>
    <el-form :label-position="labelPosition">
        <el-row>
            <el-col :span="12">
                <label class="tit">
                    <span>责任人</span>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            选择责任人<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>张鑫</el-dropdown-item>
                            <el-dropdown-item>丽红</el-dropdown-item>
                            <el-dropdown-item>黄勇</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </label>
                <p class="pr20"><input type="text" value="张鑫"></p>
            </el-col>
            <el-col :span="12"> 
                <label class="tit">
                    <span>责任人单位</span>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            选择责任单位<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>政府</el-dropdown-item>
                            <el-dropdown-item>银行</el-dropdown-item>
                            <el-dropdown-item>邮局</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </label>
                <p class="pr20"><input type="text"></p>
            </el-col>
        </el-row>
        <el-row>
            <label>温馨提示</label>
            <p class="pr20 pb10"><input type="text" value="文本框内容" class="tishi"></p>
        </el-row>
        <uploader v-for="(v, k) in $store.state.imgArr" :delSpan="v.delSpan" :key="k" :index="k"></uploader>
        <h4 class="mt20 mb20"><el-button type="primary">保存并发布</el-button></h4>
    </el-form>
  </div>
</template>
<script>
import uploader from '../upload/uploader';
export default {
    name:'information',
    data() {
      return {
        labelPosition: 'top'
      };
    },
    components:{
        uploader
    }
}
</script>

<style scoped>
.box{
    margin: 20px;
    border: 1px solid #ccc;
    background-color: #fff;
}
.box h3{
    line-height: 35px;
    font-size: 16px;
    font-weight: normal;
}
.el-form--label-top .el-form-item__label{
    padding: 0!important;
}
.el-form-item{
    margin-bottom: 5px;
}
.tit{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding-right: 20px;
}
p input{
    background-color: #eee;
    border: none;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.tishi{
    background-color: #fff;
}
label{
    height: 40px;
    line-height: 40px;
}
.box_add p{
  line-height: 30px;
  font-size: 14px;
  color: #999;
}
.box_add p span{
  color:#01b0b9;
}
.text{
  width: 100px;
  border:none;
  background-color: #fff;
}
.add{
  border:1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  height: 100px;
  color: #999;
  position: relative;
}
.add span{
    position: absolute;
    font-size: 18px;
    text-align: center;
}
.add span i{
    font-size: 30px;
}
.add span p{
    color: #fff!important;
}
.red{
    color: red!important;
}
.add img{
    width: 100%;
    height: 100%;
}
h4{
  text-align: center;
}
.el-button--primary{
    background:#01b0b9;
}
.avatar-uploader{
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar-uploader, .el-upload {
  border:1px solid #cccccc;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
