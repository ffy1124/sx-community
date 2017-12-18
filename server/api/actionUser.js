var fs = require('fs');
module.exports=function (req,res) {
    var activeList = JSON.parse(fs.readFileSync('./data_table/activityList.json'),'utf-8').list;
    activeList.forEach((item,index) =>{
        item.startDate = item.startDate.split('T')[0] 
    });
    res.end(JSON.stringify(activeList));
};