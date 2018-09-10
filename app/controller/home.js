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
    await ctx.render('home/home.tpl', data);
  }

  async cashalo() {
    await this.ctx.render('home/cashalo.tpl');
  }

  async finmas() {
    await this.ctx.render('home/finmas.tpl');
  }

  async finizi() {
    await this.ctx.render('home/finizi.tpl');
  }
}

module.exports = HomeController;
