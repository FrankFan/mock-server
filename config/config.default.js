exports.keys = 'cookie-safe-string';
// 添加 view 配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  }
};

exports.news = {
  pageSize: 5,
  serviceUrl: 'https://hacker-news.firebaseio.com/v0',
}