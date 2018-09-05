var express = require('express');
var router = express.Router();
const Mock = require('mockjs');
const generate = require('../mock/generateFinmas');

/* GET listing. */
router.get('/', function(req, res, next) {
  const data = generate.getTransactionList();

  res.header("Content-Type", "application/json;charset=utf-8");
  res.send(JSON.stringify(data));
});

module.exports = router;
