var express = require('express');
var router = express.Router();


/* GET users listing. */
router.post('/*', function(req, res, next) {
        if(req.body != null){

                res.write( JSON.stringify(req.body));

                res.end();
        }else{
                res.write('{"result":1}');
                res.end();
        }

});

module.exports = router;