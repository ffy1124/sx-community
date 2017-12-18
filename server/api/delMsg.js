var fs = require('fs');
var jwt = require('jsonwebtoken');
module.exports = function (req, res) {
    var pagesData = JSON.parse(fs.readFileSync('./data_table/pagesList.json', 'utf-8'));
    var adminList = JSON.parse(fs.readFileSync('./data_table/admin_list.json', 'utf-8')).list;
    var id = req.body.id;
    var token = req.body.token;
    var flag = '';
    jwt.verify(token, '1508B', function (error, decoded) {
        if (error) {
            //登录超时
            flag = 'jwt expired';
        } else {
            adminList.forEach((item, index) => {
                if (item.username == decoded.username) {
                    //有权限
                    if (item.authorization == 'admin'){
                        pagesData.forEach((val, i) => {
                            if (val.id == id) {
                                pagesData.splice(i, 1);
                            }
                        });
                        fs.writeFileSync('./data_table/pagesList.json', JSON.stringify(pagesData));
                        flag = 'success';
                    }else {
                        //没有权限
                        flag = 'err';
                    }
                } 
            });
        }
    });
    res.end(flag);
};