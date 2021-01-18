var express = require('express');
var router = express.Router();
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get('/', function(req, res){
  res.cookie('name','express').send('cookie set')
});

app.listen(3000);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
