module.exports=function (req,res) {
    var addr = require('../data_table/addr.json');
    res.end(JSON.stringify(addr));
};