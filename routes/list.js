var express = require('express');
var router = express.Router();

const Mock = require('mockjs');

const data = Mock.mock({
  errorCode: 1,
  msg: '@title(5, 20)',
  'data|3': [
    {
      'msgId|+1': 1,
      'title': '@title(5, 10)',
      'template': '<p>@sentence(3, 50)</p>',
      'effectiveAt': '@datetime("MM dd,yyyy HH:mm")',
    }
  ]
});

/* GET listing. */
router.get('/', function(req, res, next) {
  res.header("Content-Type", "application/json;charset=utf-8");
  res.send(JSON.stringify(data));
});

module.exports = router;
