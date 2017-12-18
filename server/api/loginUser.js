var fs = require('fs');
var jwt = require('jsonwebtoken');
module.exports = function (req, res) {
    res.status(200);
    var admin_list = JSON.parse(fs.readFileSync('./data_table/admin_list.json', { encoding: 'utf-8' }));
    // falg为true说明用户存在为false说明用户不存在
    var token, obj, falg = false;
    admin_list.list.forEach((item) => {
        if (item.username === req.body.username) {
            falg = true;
            if (item.password === req.body.password) {
                token = jwt.sign(req.body, '1508B', { expiresIn: 30 });
                obj = {
                    "code": 1,
                    "token": token,
                    "msg": "SUCCESS"
                };
            } else {
                obj = {
                    "code": 2,
                    "error": 'error',
                    "msg": "密码错误"
                };
            }
        }
    });
    if (!falg) {
        obj = {
            "code": 3,
            "error": 'error',
            "msg": "此用户名不存在"
        };
    }
    res.end(JSON.stringify(obj));
};