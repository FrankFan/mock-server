module.exports = app => {
  const { router, controller } = app;
  // router.get('/news', controller.news.list);

  // home
  router.get('/', controller.home.index);

  // cashalo
  router.get('/cashalo', controller.home.cashalo);

  router.get('/cashalo/paymentOptions', controller.cashalo.paymentOptions);
  router.get('/cashalo/getPaymentUrl', controller.cashalo.getPaymentUrl);

  // finmas
  router.get('/finmas', controller.home.finmas);

  router.get('/finmas/getList/:id', controller.finmas.index);

  // finizi
  router.get('/finizi', controller.home.finizi);

  router.get('/finizi/loan/capital', controller.finizi.capital);
  router.get('/finizi/loan/capital/:pageNo/:pageSize', controller.finizi.capital);
  router.get('/finizi/getPaymentUrl', controller.finizi.getPaymentUrl);
  router.get('/finizi/paymentOptions', controller.finizi.paymentOptions);
  router.get('/finizi/inviteList', controller.finizi.inviteList);
  router.get('/finizi/shareContent', controller.finizi.shareContent);
}
