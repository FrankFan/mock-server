const Service = require('egg').Service;
const Mock = require('mockjs');

class FiniziService extends Service {
  async getCapitalList(pageNo = 1, pageSize) {
    this.ctx.logger.info(`pageNo = ${pageNo}, pageSize = ${pageSize}`);
    var data = Mock.mock({
      'list|3': [{
        'amount|100-99999.3': 1,
        'transactionAt': '20/04/2018',
        "transactionType|1": [
          "Giải ngân",
          "Thanh toán",
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
      }]
    });
    return data.list;
  }
}

module.exports = FiniziService;