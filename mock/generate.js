// import Mock from ('mockjs'); 不支持
const Mock = require('mockjs');

function getNotificationList () {
  const data = Mock.mock({
    errorCode: 1,
    msg: '@title(5, 20)',
    'data|3': [
      {
        'id': '@id',
        'notificationId': '@id',
        'title': '@title(5, 10)',
        'template|1': [
          '<p>Cashalo is <a href="http://m.baidu.com/">sign up baidu</a> on beta xxx </p>',
          '<p>Cashalo is <a href="http://m.jd.com/">sign up jd.com</a> on beta xxx </p>',
          '<p>Cashalo is <a href="http://m.lu.com/">sign up lu.com</a> on beta xxx </p>',
        ],
        'effectiveAt': '@datetime("MM dd,yyyy HH:mm")',
      }
    ]
  });
  return data;
}

function getCapitalList () {
  const data = Mock.mock({
    'data|11': [
      {
        'amount|100-99999.2': 1,
        'transactionAt': '@datetime("MM dd,yyyy HH:mm")',
        "transactionType|1": [
          "payment",
          "disburment",
        ],
        'transactionParty|1': [
          "To ICBC ending 4563",
          "Via online bank of China",
        ],
        'loanOrderNo|1': [
          "8981298009",
          "1288898001",
          "8912898002",
          "8988898003",
        ]
      }
    ]
  });
  return data;
}

module.exports = {
  getNotificationList,
  getCapitalList,
};
