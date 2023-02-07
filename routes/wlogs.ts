
import e from 'express'
var router = e.Router();

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

var wlogs = router;
export { wlogs }

