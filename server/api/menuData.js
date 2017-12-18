var fs = require('fs');
module.exports = function (req,res) {
    var data = null;
        switch (req.params.name) {
            case 'public_service': data = fs.readFileSync('../Mock/public.json', 'utf-8');
                break;
            case 'grid': data = fs.readFileSync('../Mock/grid.json', 'utf-8');
                break;
            case 'entry': data = fs.readFileSync('../Mock/entry.json', 'utf-8');
                break;
        }
        res.end(data);
};