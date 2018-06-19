## 基于 Express + mock.js 实现接口模拟请求

```bash
# 安装脚手架，生成express项目
$ npm i express-generator -g
# 创建项目
$ express --view=pug mock-server

   create : mock-server/
   create : mock-server/public/
   create : mock-server/public/javascripts/
   create : mock-server/public/images/
   create : mock-server/public/stylesheets/
   create : mock-server/public/stylesheets/style.css
   create : mock-server/routes/
   create : mock-server/routes/index.js
   create : mock-server/routes/users.js
   create : mock-server/views/
   create : mock-server/views/error.pug
   create : mock-server/views/index.pug
   create : mock-server/views/layout.pug
   create : mock-server/app.js
   create : mock-server/package.json
   create : mock-server/bin/
   create : mock-server/bin/www

   change directory:
     $ cd mock-server

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=mock-server:* npm start

# 安装依赖，运行项目
$ cd mock-server & npm i
# 启动项目
$ DEBUG=mock-server:* npm start

```



### 添加 mock.js

```bash
# 安装 mock.js
$ npm i mockjs
```



### 添加一个list路由

```js
var express = require('express');
var router = express.Router();

const Mock = require('mockjs');

const data = Mock.mock({
  'list|2': [
    {
      'id|+1': 1,
      'color': '@color()',
      'dae': '@datetime',
      'img': '@image()',
      'url': '@url(http)',
      'email': '@email()',
      'name': "@name(1,2)",
      'text': '@paragraph()',
    }
  ]
});

/* GET listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(data));
});

module.exports = router;

```



### 添加跨域支持

```js
// 在app.js中增加以下代码，最好放在路由最前面

// 增加CORS跨域
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'X-Request-With');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  // res.header("Content-Type", "application/json;charset=utf-8");
  res.header('X-Powered-By', 'Khan WS');
  next();
});
```


![](https://ws4.sinaimg.cn/large/006tNc79gy1fsgfoii0ypj30pd0rljwv.jpg)

