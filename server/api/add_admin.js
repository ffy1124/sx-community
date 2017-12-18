var fs = require('fs');
module.exports = function (req,res) {
    var flag = '';
    var pagesData = JSON.parse(fs.readFileSync('./data_table/pagesList.json'));
    var idMax = 0;
    pagesData.forEach((item, index)=>{
        if(item.id>idMax){
            idMax = item.id; 
        }
    });
    console.log(idMax);
    var username = req.body.username;
    pagesData.forEach((item, index) =>{
        if (item.name == username){
            flag = 'err';
        }else{
            flag = 'success';
        }
    });
    if (flag == 'success'){
        var obj = {
            "id": idMax + 1,
            "name": username,
            "age": 50,
            "sex": "男",
            "tel": req.body.tel,
            "state": "已通知",
            "msg": req.body.msg
        }
        pagesData.unshift(obj);
        fs.writeFileSync('./data_table/pagesList.json', JSON.stringify(pagesData));
    }
    res.end(flag);
};