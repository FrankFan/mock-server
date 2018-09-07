const Controller = require('egg').Controller;

class FiniziController extends Controller {
  async capital() {
    const pageNo = 1;
    const pageSize = 10;
    const data = await this.ctx.service.finizi.getCapitalList(pageNo, pageSize);

    const responsJSON = {
      res_code: 0,
      res_msg: 'success',
      data,
    };

    this.ctx.body = responsJSON;
  }
}

module.exports = FiniziController;