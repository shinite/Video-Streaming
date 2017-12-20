var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', function(req,res){
  console.log(req.body)
	res.send("Hello "+ req.body);
});

module.exports = router;
