<template>
    <div class="box_add">
        <p class="pt15">
            <input type="text" value="请输入栏目名称" class="text">
            <span class="pl10 pr10">编辑</span>
            <span class="pl10 pr10" @click="add">添加栏目</span>
            <span @click="preview">预览</span><label class="ml15 red" v-if="this.delSpan" @click="delDom()">删除</label>
        </p>
        <el-upload
            class="avatar-uploader"
            action="http://localhost:3000/user/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div class="loading" v-if="isShow">
            <img :src="imageUrl">
            <p><el-button type="primary" @click="close">关闭</el-button></p>
        </div>
        <!-- <p>图片格式：jpg\png 图片大小：小于200K 建议尺寸：宽度大于800px</p> -->
    </div>
</template>

<script>
export default {
    name:'uploader',
    props: ['delSpan','index','imageUrls'],
    data(){
        return{
            imageUrl: this.imageUrls,
            isShow: ''
        };
    },
    methods: {
        delDom (){
            this.$store.commit('delArr',this.index);
        },
        add (){
            this.$store.commit('updated_imgArr');
        },
        handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.$store.commit('update_imgUrl', this.imageUrl);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isPNG = file.type === 'image/png';
            const isPIC = (isJPG || isPNG);
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isPIC) {
            this.$message.error('上传头像图片只能是 JPG和PNG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isPIC && isLt2M;
        },
        preview(){
            this.isShow = this.imageUrl;
        },
        close(){
            this.isShow = '';
        }
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
.loading{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
}
.loading img{
    position:absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 50%;
    height: 70%;
}
.loading p{
    width: 100%;
    position: absolute;
    bottom: 10px;
    text-align: center!important;
}
</style>
