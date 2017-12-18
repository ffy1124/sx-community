<template>
   <div class="wrap pl15 pt15">
          <h3 class="pl15">基本信息<span>未发布</span></h3>
          <div class="information">
            <div class="header">
              <uploader></uploader>
            </div>
            <div class="message mt20 pt20">
              <el-form ref="form" label-width="90px">
                <el-form-item label="活动名称">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动时间">
                  <el-col :span="12">
                    <el-date-picker type="date" placeholder="选择开始日期" v-model="form.startDate" style="width: 100%;"></el-date-picker>
                  </el-col>
                  <el-col :span="12">
                    <el-date-picker type="date" placeholder="选择结束日期" v-model="form.endDate" style="width: 100%;"></el-date-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="请选择地址">
                  <el-col :span="8">
                    <el-select v-model="form.provide" @change="getCity" placeholder="请选择省份">
                      <el-option 
                        v-for="(v, k) in data" :key="k"
                        :label="v.name" 
                        :value="v.name">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="8">
                    <el-select v-model="form.city" @change="getAreas" placeholder="请选择城市">
                      <el-option 
                        v-for="(v, k) in cityData" :key="k"
                        :label="v.name" 
                        :value="v.name">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="8">
                    <el-select v-model="form.areas" placeholder="请选择区域">
                      <el-option 
                        v-for="(v, k) in areasData" :key="k"
                        :label="v.name" 
                        :value="v">
                      </el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <uploader v-for="(v, k) in $store.state.imgArr" :delSpan="v.delSpan" :key="k" :index="k" :imageUrls="imageUrls"></uploader>  
          <h4 class="mt20 mb20"><el-button type="primary" @click="save_publish">保存并发布</el-button></h4>
        </div>
</template>
<script>
import uploader from '../upload/uploader';
export default {
    name:'Introduction',
    data (){
        return{
            data: '',
            cityData:'',
            areasData:'',
            form:{
                name:'',
                startDate:'',
                endDate:'',
                areas:'',
                provide:'',
                city:''
            },
            imageUrls:''
        };
    },
    created(){
        this.$http.get('/admin/community/location/root').then((res)=>{
            this.data = res.data;
        });
    },
    components:{
        uploader
    },
    methods:{
        getCity (val) {
        this.form.city = '';
        this.form.areas = '';
        this.areasData = '';
        this.cityData = '';
        this.data.forEach((item, index)=>{
          if(item.name == val){
              this.cityData = item.city
          }
        });
      },
      getAreas (val) {
        this.form.areas = '';
        this.areasData = '';
        this.cityData.forEach((item, index) =>{
          if(item.name == val){
              this.areasData = item.area
          }
        });
      },
      //保存提交
      save_publish (){
        if(this.form.name){
          this.$http.post('/admin/activity/add',{
            categoryId:this.$route.params.id,
            name:this.form.name,
            imagePath: this.$store.state.imgUrl,
            startDate:this.form.startDate,
            endDate:this.form.endDate,
            locationId:'1',
            locationName:this.form.provide+this.form.city+this.form.areas
          }).then((res) =>{
            if(res.data == 'success'){
              this.$message('提交成功');
              this.form.name = '';
              this.form.startDate = '',
              this.form.endDate = '',
              this.form.areas = '',
              this.form.provide = '',
              this.form.city = '',
              this.$store.state.imgUrl = [],
              this.$store.state.imgArr= [{'delSpan': false}],
              this.imageUrls = ''
            }
          });
        }else{
          this.$message('活动名称不能为空');
        }
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
.information{
  display: flex;
}
.information .header{
  flex:1;
}
.message{
  flex: 2;
}
.el-form-item[data-v-0993f067]{
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
