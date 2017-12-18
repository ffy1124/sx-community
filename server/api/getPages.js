var fs = require('fs');
module.exports = function (req,res) {
    var pagesData = JSON.parse(fs.readFileSync('./data_table/pagesList.json', 'utf-8'));
    var pageSum = pagesData.length
    res.end(JSON.stringify(pageSum));
}