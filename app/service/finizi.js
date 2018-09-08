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

  async getPaymentUrl() {
    this.ctx.logger.info(`request finizi.serice.getPaymentUrl`);
    var data = Mock.mock({
      url: {
        "paymentUrl": "https://m.cashalo.com/rbank-payment/#/?orderNo=B180613123457153&channel=RSB"
      }
    });
    return data.url;
  }

  async paymentOptions() {
    this.ctx.logger.info(`request finizi.serice.paymentOptions`);
    var data = Mock.mock({
      list: [{
        "name": "Robinsons Bank",
        "channel": "RSB",
        "imgUrl": "https://s3-ap-southeast-1.amazonaws.com/cashalo-app/image/banklogo_Robinsons%403x.png",
        "description": "Pay via Robinsons Bank Online"
      }, {
        "name": "Online Banking",
        "channel": "DP",
        "imgUrl": "https://s3-ap-southeast-1.amazonaws.com/cashalo-app/image/payment_icon_onlinebank%403x.png",
        "description": "Pay via BPI, BDO, or Metrobank Online Banking"
      }, {
        "name": "ECPay",
        "channel": "ECPay",
        "imgUrl": "",
        "description": "Accessible daily Mon-Sun"
      }, {
        "name": "7-Eleven",
        "channel": "7-Eleven",
        "imgUrl": "",
        "description": "Open Mon-Sun 10AM-7PM"
      }]
    });
    return data.list;
  }
}

module.exports = FiniziService;