<template>
    <div class="wrap">
          <h2 class="tit"><label class="ml20 mr20">邀请名单</label><b class="mr15">添加居民</b><span class="ccc">短信通知</span></h2>
          <div class="list">
              <el-table v-loading="loading"
                ref="multipleTable"
                :data = $store.state.pagesData
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                  type="selection"
                  width="55">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="居民姓名"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="tel"
                  label="联系电话"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="sex"
                  label="性别"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  prop="age"
                  label="年龄"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="state"
                  label="短信通知"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="msg"
                  label="备注信息"
                  width="150">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  label="操作"
                  width="150">
                  <template slot-scope="scope">
                    <el-button type="text" size="small">查看</el-button>
                    <el-button 
                    @click="writeRow(scope.row.id)"
                    type="text" size="small">编辑</el-button>
                    <el-button
                      @click.native.prevent="deleteRow(scope.row.id)"
                      type="text"
                      size="small">
                      删除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
          </div>
          <el-pagination
            background
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :total=pageSum>
          </el-pagination>
        </div>
</template>

<script>
import { getCookie } from '@/utils/utils';
export default {
    name:'InvitingResidents',
    data(){
        return{
            page: 1,
            loading: false,
            pageSum: 0
        };
    },
    created () {
      this.$store.dispatch('update_pagesData', this.page);
      this.$http.post('/admin/community/getPages').then((res) => {
          this.pageSum = res.data;
      })
    },
    methods:{
        //删除数据
        deleteRow(id) {
            let that = this;
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => { //点击确认
                that.loading = true;
                this.$http.post('/admin/community/delpage',{
                id:id,
                token: getCookie('token')
                }).then((res)=>{
                if(res.data == 'success'){
                    this.$store.dispatch('update_pagesData', this.page);
                    that.loading = false;
                    this.$message({
                    type: 'success',
                    message: '删除成功!'
                    });
                }else if(res.data == 'err'){
                    that.loading = false;
                    this.$message({
                    type: 'err',
                    message: '没有权限操作'
                    });
                }else{
                    that.loading = false;
                    this.$confirm('登录超时是否重新登录?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                    this.$router.push({
                        name: 'login',
                        query:{
                        from: '/index/publicService/activity/1'
                        }
                    });
                    }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消登录'
                    });          
                    });
                }
                });
            }).catch(() => { //点击取消
            this.$message({
                type: 'info',
                message: '已取消删除'
            });          
            });
        },
        //修改备注
        writeRow(id){
            this.$prompt('请输入备注内容', '添加备注', {
            confirmButtonText: '确定',
            cancelButtonText: '取消'
            }).then(({ value }) => {//点击确定
            //请求后台接口
            this.$http.post('/admin/community/writeMsg',{
                id:id,
                msg: value
            }).then((res)=>{
                if(res.data == 'success'){
                this.$store.dispatch('update_pagesData', this.page);
                this.$message({
                    type: 'success',
                    message: '备注成功'
                });
                }
            });
            }).catch(() => {//点击取消
            this.$message({
                type: 'info',
                message: '取消输入'
            });       
            });
        },
        handleCurrentChange(val) {
            this.$store.dispatch('update_pagesData', val);
            this.page = val;
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    }
}
</script>

<style scoped> 
.wrap{
  background-color: #fff;
}
.wrap h3{
  font-size: 16px;
  line-height: 35px;
  position: relative;
}
.wrap h3 span{
  position: absolute;
  top: 0;
  right: 15px;
  font-size: 12px;
  color: #999;
}
.wrap h4{
  text-align: center;
}
.tit{
  line-height: 40px;
  font-size: 15px;
  padding-left: 20px;
  color: skyblue;
}
.tit label{
  color: #333!important;
}
</style>
