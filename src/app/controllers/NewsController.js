class NewsController {
  // [GET  /news]
  index(req, res) {
    res.render('news');
  }
  // [GET] /new/:slug

  showdetail(req, res) {
    res.send('NEWS DETAIL');
  }
}

export default new NewsController();
