var fs = require('fs');
var url = '../server/data_table/activityList.json';
module.exports = function (req,res) {
    var act = JSON.parse(fs.readFileSync(url, 'utf-8'));
    act.list.push(req.body);
    fs.writeFileSync(url,JSON.stringify(act));
    res.end('success');
};