var fs = require('fs');
module.exports = function (req, res) {
    var pagesData = JSON.parse(fs.readFileSync('./data_table/pagesList.json', 'utf-8'));
    var id = req.body.id;
    var msg = req.body.msg;
    pagesData.forEach((item, index) =>{
        if(item.id == id){
            item.msg = msg;
        }
    });
    fs.writeFileSync('./data_table/pagesList.json', JSON.stringify(pagesData));
    res.end('success');
};