var Mock = require('mockjs');
var fs = require('fs');
module.exports = function (req,res) {
    var pagesData = JSON.parse(fs.readFileSync('./data_table/pagesList.json', 'utf-8'));
    var pageSize = req.body.pageSize;
    var count = req.body.count;
    var list = pagesData.slice((pageSize - 1) * count, pageSize * count);
    res.end(JSON.stringify(list));
};
