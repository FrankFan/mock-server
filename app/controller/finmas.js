const Controller = require('egg').Controller;

class FinmasController extends Controller {
  async index() {
    const json = `
    {
      "errorCode": 0,
      "msg": "success",
      "data": {
        "currentPage": 1,
        "pageSize": 5,
        "totalNum": 5,
        "isMore": 94210,
        "totalPage": 1,
        "startIndex": 25697,
        "items": [
          {
            "number": 8,
            "mobile": "091****6972",
            "registrationDate": "Jul 8, 2018",
            "applied": "Yes"
          },
          {
            "number": 7,
            "mobile": "091****6972",
            "registrationDate": "Jul 8, 2018",
            "applied": "Not yet"
          },
          {
            "number": 6,
            "mobile": "091****6972",
            "registrationDate": "Jul 8, 2018",
            "applied": "Yes"
          }
        ]
      }
    }
    `;
    this.ctx.body = json;
  }
}

module.exports = FinmasController;