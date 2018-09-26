exports.keys = 'cookie-safe-string';
// 添加 view 配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
    '.nj': 'nunjucks',
  }
};

// 配置security
exports.security = {
  domainWhiteList: [
    'http://localhost:4200',
    'http://192.168.2.124:8080',
    'http://192.168.12.12:8080',
    'http://localhost:8080',
  ]
};


exports.news = {
  pageSize: 5,
  serviceUrl: 'https://hacker-news.firebaseio.com/v0',
}