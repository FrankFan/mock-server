const Mock = require('mockjs');

function getTransactionList () {
  const data = Mock.mock({
    'data|13': [
      {
        'amount|100-99999.2': 1,
        'transactionAt': 'May 10, 2018 12:24',
        "transactionType|1": [
          "Pembayaran",
          "Pencairan",
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
  getTransactionList,
};