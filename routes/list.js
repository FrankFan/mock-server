var express = require('express');
var router = express.Router();

const Mock = require('mockjs');

const data = Mock.mock({
  'list|2': [
    {
      'id|+1': 1,
      'color': '@color()',
      'dae': '@datetime',
      'img': '@image()',
      'url': '@url(http)',
      'email': '@email()',
      'name': "@name(1,2)",
      'text': '@paragraph()',
    }
  ]
});

/* GET listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(data));
});

module.exports = router;
