const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx,
      app,
    } = this;
    const data = {
      name: 'egg',
    }
    await ctx.render('home/cashalo.tpl', data);
  }

  async paymentOptions() {
    const data = await this.ctx.service.cashalo.paymentOptions();
    const responsJSON = {
      res_code: 0,
      res_msg: 'success',
      data,
    };

    this.ctx.body = responsJSON;
  }

  async getPaymentUrl() {
    const data = await this.ctx.service.cashalo.getPaymentUrl();
    const responsJSON = {
      res_code: 0,
      res_msg: 'success',
      data,
    };

    this.ctx.body = responsJSON;
  }
}

module.exports = HomeController;
