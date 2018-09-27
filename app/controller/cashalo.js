const Controller = require('egg').Controller;

class CashaloController extends Controller {
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
  async rewardsRule() {
    console.log('xxx');
    const data = await this.ctx.service.cashalo.rewardsRule();
    const responsJSON = {
      res_code: 0,
      res_msg: 'success',
      data,
    };

    this.ctx.body = responsJSON;
  }
  async invitationResult() {
    const data = await this.ctx.service.cashalo.invitationResult();
    const responsJSON = {
      res_code: 0,
      res_msg: 'success',
      data,
    };

    this.ctx.body = responsJSON;
  }
  async awardList() {
    const data = await this.ctx.service.cashalo.awardList();
    const responsJSON = {
      res_code: 0,
      res_msg: 'success',
      data,
    };

    this.ctx.body = responsJSON;
  }
  async shareContent() {
    const data = await this.ctx.service.cashalo.shareContent();
    const responsJSON = {
      res_code: 0,
      res_msg: 'success',
      data,
    };

    this.ctx.body = responsJSON;
  }
}

module.exports = CashaloController;