<template>
    <div class="nameList pl20 pr20">
        <h3 class="pl10 pt10">报名名单</h3>
        <el-table
            v-loading="loading"
            :data=$store.state.pagesData
            style="width: 100%">
                <el-table-column
                fixed
                prop="name"
                label="居民姓名"
                width="150">
                </el-table-column>
                <el-table-column
                prop="tel"
                label="联系电话"
                width="200">
                </el-table-column>
                <el-table-column
                prop="msg"
                label="备注信息"
                width="200">
                </el-table-column>
                <el-table-column
                prop="time"
                label="报名时间"
                width="200">
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="120">
                    <template slot-scope="scope">
                        <el-button
                        @click.native.prevent="deleteRow(scope.row.id)"
                        type="text"
                        size="small">
                        删除
                        </el-button>
                    </template>
                </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :total="this.pageSum">
        </el-pagination>
    </div> 
</template>

<script>
import { getCookie } from '@/utils/utils';
export default {
    name:'management',
    data(){
        return{
            page: 1,
            loading: false,
            pageSum: 0
        };
    },
    created(){
        this.$store.dispatch('update_pagesData', this.page);
        this.$http.post('/admin/community/getPages').then((res) => {
          this.pageSum = res.data;
      })
    },
    methods:{
        handleCurrentChange(val) {
            this.$store.dispatch('update_pagesData', val);
            this.page = val;
        },
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
      }
    }
}
</script>

<style scoped>
.nameList{
    background-color: #fff;
}
.nameList>h3{
    line-height: 40px;
    font-size: 15px;
}
</style>
