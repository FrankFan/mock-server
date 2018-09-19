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

  async getInviteList() {
    this.ctx.logger.info(`getInviteList`);
    var data = Mock.mock({
      'list|1': [
        {
          "currentPage": 1,
          "pageSize": 5,
          "totalNum": 26,
          "isMore": 94210,
          "totalPage": 1,
          "startIndex": 25697,
          "items": [{
            "number": 8,
            "mobile": "091****6972",
            "registrationDate": "Jul 8, 2018",
            "applied": "Yes"
          }, {
            "number": 7,
            "mobile": "091****6972",
            "registrationDate": "Jul 8, 2018",
            "applied": "Not yet"
          }, {
            "number": 6,
            "mobile": "091****6972",
            "registrationDate": "Jul 8, 2018",
            "applied": "Yes"
          },{
            "number": 5,
            "mobile": "091****6972",
            "registrationDate": "Jul 8, 2018",
            "applied": "Yes"
          }, {
            "number": 4,
            "mobile": "091****6972",
            "registrationDate": "Jul 8, 2018",
            "applied": "Not yet"
          }, {
            "number": 3,
            "mobile": "091****6972",
            "registrationDate": "Jul 8, 2018",
            "applied": "Yes"
          }, {
            "number": 2,
            "mobile": "091****6972",
            "registrationDate": "Jul 8, 2018",
            "applied": "Not yet"
          }, {
            "number": 1,
            "mobile": "091****6972",
            "registrationDate": "Jul 8, 2018",
            "applied": "Yes"
          }]
        }
      ]
    });
    return data.list;
  }

  async getShareContent() {
    this.ctx.logger.info(`request finizi.serice.getPaymentUrl`);
    const data = Mock.mock({
      "list": [{
        "channel": "Copy as text",
        "url": "111111",
        "title": "22222",
        "subtitle": "33333",
        "imageUrl": "444444",
        "messageBody": "这是Copy as text的内容",
        "iconUrl": "https://s3-ap-southeast-1.amazonaws.com/oriente-resource/common/invite/invitefriend_icon_email@2x.png"
      }, {
        "channel": "Facebook",
        "url": "1111",
        "title": "22222",
        "subtitle": "3333",
        "imageUrl": "444",
        "messageBody": "5555",
        "iconUrl": "https://s3-ap-southeast-1.amazonaws.com/oriente-resource/common/invite/invitefriend_icon_fb@2x.png"
      },{
        "channel": "Copy as text",
        "url": "111111",
        "title": "22222",
        "subtitle": "33333",
        "imageUrl": "444444",
        "messageBody": "这是Copy as text的内容",
        "iconUrl": "https://s3-ap-southeast-1.amazonaws.com/oriente-resource/common/invite/invitefriend_icon_email@2x.png"
      }, {
        "channel": "Facebook",
        "url": "1111",
        "title": "22222",
        "subtitle": "3333",
        "imageUrl": "444",
        "messageBody": "5555",
        "iconUrl": "https://s3-ap-southeast-1.amazonaws.com/oriente-resource/common/invite/invitefriend_icon_fb@2x.png"
      }]
    });
    return data.list;
  }
}

module.exports = FiniziService;