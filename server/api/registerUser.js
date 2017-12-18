var fs = require('fs');
module.exports = function (req, res) {
    res.status(200);
    var admin_list = fs.readFileSync('./data_table/admin_list.json', { encoding: 'utf-8' });
    admin_list = JSON.parse(admin_list);
    admin_list.list.push(req.body);
    fs.writeFileSync('./data_table/admin_list.json', JSON.stringify(admin_list));
    var obj = {
        "code": 1,
        "msg": "SUCCESS"
    };
    res.end(JSON.stringify(obj));
};