<template>
    <div class="wrap">
        <h2 class="tit"><label class="ml20 mr20">报名名单</label>短信通知</h2>
        <div class="list">
            <el-table
              ref="multipleTable"
              :data=$store.state.pagesData
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                prop="name"
                label="剧名姓名"
                width="120">
              </el-table-column>
              <el-table-column
                prop="tel"
                label="联系电话"
                width="120">
              </el-table-column>
              <el-table-column
                prop="state"
                label="短信通知"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="msg"
                label="报名备注"
                width="120">
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
export default {
    name:'residentRegistration',
    data(){
        return{
            page: 1,
            pageSum: 0
        };
    },
    created () {
      this.$store.dispatch('update_pagesData', this.page);
      this.$http.post('/admin/community/getPages').then((res) => {
          this.pageSum = res.data;
      });
    },
    methods:{
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
.list span{
  display: inline-block;
  width: 15%;
  text-align: center;
}
.list p{
line-height: 40px;
}
</style>
