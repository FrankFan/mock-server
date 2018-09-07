const Controller = require('egg').Controller;

class FiniziController extends Controller {
  async capital() {
    const data = [
      {
        "amount": "89898.86899",
        "transactionAt": "May 10, 2018 12:24",
        "transactionType": "pembayaran",
        "transactionParty": "To ICBC ending 4563",
        "loanOrderNo": "8981298009"
      },
      {
        "amount": "89898.86899",
        "transactionAt": "May 10, 2018 12:24",
        "transactionType": "pencairan",
        "transactionParty": "Via online bank of China",
        "loanOrderNo": "8912898002"
      },
      {
        "amount": "89898.86899",
        "transactionAt": "May 10, 2018 12:24",
        "transactionType": "pembayaran",
        "transactionParty": "To ICBC ending 4563",
        "loanOrderNo": "8981298009"
      },
    ];

    const responsJSON = {
      res_code: '00',
      res_msg: 'success',
      data,
    };

    this.ctx.body = responsJSON;
  }
}

module.exports = FiniziController;