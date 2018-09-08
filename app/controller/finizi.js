const Controller = require('egg').Controller;

class FiniziController extends Controller {
  async capital() {
    const {
      pageNo,
      pageSize,
    } = this.ctx.params;

    const data = await this.ctx.service.finizi.getCapitalList(pageNo, pageSize);

    const responsJSON = {
      res_code: 0,
      res_msg: 'success',
      data,
    };

    this.ctx.body = responsJSON;
  }

  async getPaymentUrl() {
    const data = await this.ctx.service.finizi.getPaymentUrl();
    const responsJSON = {
      res_code: 0,
      res_msg: 'success',
      data,
    };

    this.ctx.body = responsJSON;
  }

  async paymentOptions() {
    const data = await this.ctx.service.finizi.paymentOptions();
    const responsJSON = {
      res_code: 0,
      res_msg: 'success',
      data,
    };

    this.ctx.body = responsJSON;
  }
}

module.exports = FiniziController;