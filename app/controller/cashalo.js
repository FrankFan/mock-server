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
}

module.exports = HomeController;
