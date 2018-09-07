module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/finizi/getList/:id', controller.finmas.index);

  // finizi
  router.get('/finizi/loan/capital', controller.finizi.capital);
}
