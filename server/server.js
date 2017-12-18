var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
app.use(bodyParser.json());
app.all("*",function (req,res,next) { 
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('content-type', 'application/json;charset=UTF-8');
    next();
});

//登录接口
var loginUser = require('./api/loginUser');
app.post('/admin/loginUser', loginUser);

//注册接口
var registerUser = require('./api/registerUser');
app.post('/admin/registerUser', registerUser);

// 菜单请求数据的接口
let menuData = require('./api/menuData.js');
app.all('/admin/menu/:name', menuData);

//文件上传
var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads');
    },
    filename: function (req,file,cb) {
        cb(null,file.fieldname+'-'+file.originalname);
    }
});
var uploader = multer({storage:storage});
let upload = '/user/upload';
app.post(upload, uploader.single('file'),function (req,res) { 
    res.end(JSON.stringify(1));
});

//添加活动
let addAct = '/admin/activity/add';
let addActCallback = require('./api/activity_add');
app.post(addAct, addActCallback);

//请求地址数据
let addApi = require('./api/location');
app.get('/admin/community/location/root',addApi);

//请求居民信息
let addMsg = require('./api/pages');
app.post('/admin/community/page',addMsg);

//删除居民信息
let delMsg = require('./api/delMsg');
app.post('/admin/community/delpage',delMsg);

//备注居民信息
let writeMsg = require('./api/writeMsg');
app.post('/admin/community/writeMsg', writeMsg);

//居民报名
let addAdmin = require('./api/add_admin');
app.post('/admin/community/addUser', addAdmin);

//居民活动
let actionUser = require('./api/actionUser');
app.post('/admin/community/actionUser', actionUser);

//请求分页数
let getPages = require('./api/getPages');
app.post('/admin/community/getPages', getPages);

app.listen(3000,function (data) { 
    console.log('server is listen');
});