const Service = require('egg').Service;
const Mock = require('mockjs');

class CashaloService extends Service {
  async paymentOptions() {
    this.ctx.logger.info(`request finizi.serice.paymentOptions`);
    var data = Mock.mock({
      list: [{
        "id": 1,
        "name": "Remittance & Payment Center",
        "channel": "Remittance&PaymentCenter",
        "imgUrl": "",
        "seqNo": 1,
        "level": 1,
        "parentId": 0,
        "optionCode": "1",
        "childList": [{
          "id": 101,
          "name": "Bayad Center",
          "channel": "BAYD",
          "imgUrl": "https://s3-ap-southeast-1.amazonaws.com/oriente-resource/common/payment-logo/paymentlogo_bayadcenter@2x.png",
          "description": "Open Mon-Sun 8AM-5PM",
          "seqNo": 101,
          "level": 2,
          "parentId": 1,
          "optionCode": "BAYD"
        }, {
          "id": 102,
          "name": "Cebuana Lhuillier Bills Payment",
          "channel": "CEBL",
          "imgUrl": "https://s3-ap-southeast-1.amazonaws.com/oriente-resource/common/payment-logo/paymentlogo_CebuanaLhuillier@2x.png",
          "description": "Operating hours may vary",
          "seqNo": 102,
          "level": 2,
          "parentId": 1,
          "optionCode": "CEBL"
        }, {
          "id": 103,
          "name": "LBC",
          "channel": "LBC",
          "imgUrl": "https://s3-ap-southeast-1.amazonaws.com/oriente-resource/common/payment-logo/paymentlogo_LBC@2x.png",
          "description": "Open Mon-Sun 8AM-6PM on all LBC outlet nationwide (except for SM outlets)",
          "seqNo": 103,
          "level": 2,
          "parentId": 1,
          "optionCode": "LBC"
        }]
      }, {
        "id": 2,
        "name": "Over-the-counter",
        "channel": "OverTheCcounter",
        "imgUrl": "",
        "seqNo": 2,
        "level": 1,
        "parentId": 0,
        "optionCode": "2",
        "childList": [{
          "id": 201,
          "name": "7-Eleven",
          "channel": "7-Eleven",
          "imgUrl": "https://s3-ap-southeast-1.amazonaws.com/oriente-resource/common/payment-logo/paymentlogo_711%402x.png",
          "description": "Accessible daily Mon-Sun",
          "seqNo": 201,
          "level": 2,
          "parentId": 2,
          "optionCode": "711"
        }, {
          "id": 202,
          "name": "ECPay",
          "channel": "ECPay",
          "imgUrl": "https://s3-ap-southeast-1.amazonaws.com/oriente-resource/common/payment-logo/paymentlogo_ecpay%402x.png",
          "description": "Open Mon-Sun 10AM-7PM",
          "seqNo": 202,
          "level": 2,
          "parentId": 2,
          "optionCode": "ECPY"
        }, {
          "id": 203,
          "name": "Robinsons Bank Bills Payment",
          "channel": "RSB",
          "imgUrl": "https://s3-ap-southeast-1.amazonaws.com/cashalo-app/image/banklogo_Robinsons%403x.png",
          "description": "Open Mon-Fri 9AM-4PM",
          "seqNo": 203,
          "level": 2,
          "parentId": 2,
          "optionCode": "RSB"
        }, {
          "id": 204,
          "name": "Robinsons Business Center",
          "channel": "RBC",
          "imgUrl": "https://s3-ap-southeast-1.amazonaws.com/oriente-resource/common/payment-logo/paymentlogo_RBC@2x.png",
          "description": "Open Mon-Fri 9AM-4PM",
          "seqNo": 204,
          "level": 2,
          "parentId": 2,
          "optionCode": "RBC"
        }]
      }, {
        "id": 3,
        "name": "Online Banking",
        "channel": "OnlineBanking",
        "imgUrl": "",
        "seqNo": 3,
        "level": 1,
        "parentId": 0,
        "optionCode": "3",
        "childList": [{
          "id": 301,
          "name": "BDO Internet Banking",
          "channel": "BDO",
          "imgUrl": "https://s3-ap-southeast-1.amazonaws.com/oriente-resource/common/payment-logo/paymentlogo_BDO@2x.png",
          "description": "Accessible between 6AM-9PM",
          "seqNo": 301,
          "level": 2,
          "parentId": 3,
          "optionCode": "BOG"
        }, {
          "id": 302,
          "name": "BPI Express Online Banking",
          "channel": "BPI",
          "imgUrl": "https://s3-ap-southeast-1.amazonaws.com/oriente-resource/common/payment-logo/paymentlogo_BPI@2x.png",
          "description": "Accessible between 6AM-9PM",
          "seqNo": 302,
          "level": 2,
          "parentId": 3,
          "optionCode": "BPI"
        }, {
          "id": 303,
          "name": "Metrobankdirect Internet Banking",
          "channel": "MBTC",
          "imgUrl": "https://s3-ap-southeast-1.amazonaws.com/oriente-resource/common/payment-logo/paymentlogo_metrobank@2x.png",
          "description": "Accessible between 6AM-9PM",
          "seqNo": 303,
          "level": 2,
          "parentId": 3,
          "optionCode": "MBTC"
        }, {
          "id": 304,
          "name": "Robinsons Bills Payment",
          "channel": "RSBB",
          "imgUrl": "https://s3-ap-southeast-1.amazonaws.com/cashalo-app/image/banklogo_Robinsons%403x.png",
          "description": "Accessible daily Mon-Sun",
          "seqNo": 304,
          "level": 2,
          "parentId": 3,
          "optionCode": "RSBB"
        }]
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

  async rewardsRule() {
    this.ctx.logger.info(`request finizi.serice.getPaymentUrl`);
    var data = Mock.mock({
      list: [{
          "ruleItem": "ySeuB8kRSy",
          "myRewards": 82319
        },
        {
          "ruleItem": "m9QpBo0pm7",
          "myRewards": 82465
        },
        {
          "ruleItem": "KS5MXjHtVz",
          "myRewards": 55073
        }
      ]
    });
    return data.list;
  }
  async invitationResult() {
    this.ctx.logger.info(`request finizi.serice.getPaymentUrl`);
    var data = Mock.mock({
      body: {
        "eventRewards": 98741,
        "invitedFriends": 24327,
        "awardedRewards": 74249
      }
    });
    return data.body;
  }
  async awardList() {
    this.ctx.logger.info(`request finizi.serice.getPaymentUrl`);
    var data = Mock.mock({
      body: [{
          "activityName": "L2oMvV5Jlk",
          "startDate": "1537949375828",
          "endDate": "1537948546256",
          "paidAmount": "WSzW8EeHkV",
          "unpaidAmount": "fYzcIWKFy5"
        },
        {
          "activityName": "9tU3a7wxzs",
          "startDate": "1537948316918",
          "endDate": "1537949968230",
          "paidAmount": "WZ5QLfXOsa",
          "unpaidAmount": "eHmDnuocox"
        },
        {
          "activityName": "CUECocCIXv",
          "startDate": "1537948360731",
          "endDate": "1537948254571",
          "paidAmount": "gnjHYrMxsB",
          "unpaidAmount": "zPINlehXK1"
        }
      ]
    });
    return data.body;
  }

}

module.exports = CashaloService;