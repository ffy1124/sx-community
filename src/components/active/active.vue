<template>
  <div class="box pt10 pl10">
    <el-tabs v-model="activeName2" type="card">
      <el-tab-pane label="活动介绍" name="first">
        <Introduction></Introduction>
      </el-tab-pane>
      <el-tab-pane label="邀请居民" name="second">
        <InvitingResidents></InvitingResidents>
      </el-tab-pane>
      <el-tab-pane label="居民报名" name="third">
        <residentRegistration></residentRegistration>
      </el-tab-pane>
      <el-tab-pane label="活动总结" name="fourth">
       <activitySummary></activitySummary>
      </el-tab-pane>
    </el-tabs>
  </div>
  </div>
</template>
<script>
import activitySummary from './activitySummary';
import Introduction from './Introduction';
import InvitingResidents from './InvitingResidents';
import residentRegistration from './residentRegistration';
export default {
    name:'activity',
    data() {
      return {
        activeName2: 'fourth',
        multipleSelection: []
      };
    },
    components:{
        activitySummary,
        Introduction,
        InvitingResidents,
        residentRegistration
    }
}
</script>

<style scoped>
.el-tabs{
  background: #fff;
}
.el-form-item{
  width: 300px;
  margin: 0;
}
#pane-fourth{
  background-color: #fff;
  border: 1px solid #efefef;
  padding: 10px;
}
#pane-fourth p{
  line-height: 30px;
  font-size: 14px;
  color: #999;
}
#pane-fourth p span{
  color:#01b0b9;
}
#pane-fourth h4{
  text-align: center;
}
</style>
