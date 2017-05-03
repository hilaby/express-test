var express = require('express');
var router = express.Router();
var lib = require('./lib');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({message: "test"});
});

function respondToPostCall(req, res, next){
    var good = true;
    if(good){
        res.send({all: "good"});
    }else{
        next({message: "something went wrong", status: 401})
    }
}

router.post('/test', lib.checkAuth, respondToPostCall);

router.put('/', function(req, res, next) {
  res.send({message: "test"});
});



module.exports = router;
