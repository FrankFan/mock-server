var express = require('express');
var router = express.Router();
const Mock = require('mockjs');
const generate = require('../mock/generate');

/* GET listing. */
router.get('/', function(req, res, next) {
  const data = generate.getNotificationList();

  res.header("Content-Type", "application/json;charset=utf-8");
  res.send(JSON.stringify(data));
});


function generateData () {
  const data = Mock.mock({
    errorCode: 1,
    msg: '@title(5, 20)',
    'data|3': [
      {
        'notificationId': '@id',
        'title': '@title(5, 10)',
        'template': '<p>@sentence(3, 50)</p>',
        'effectiveAt': '@datetime("MM dd,yyyy HH:mm")',
      }
    ]
  });
  return data;
}

module.exports = router;
