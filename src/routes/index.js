import newsRouter from './news.js'

const routes = (app) => {

  app.use('/news', newsRouter);
  

  app.get('/', (req, res) => {
    res.render('home');
  });


  app.get('/search', (req, res) => {
    res.render('search');
  });

  app.post('/search', (req, res) => {
    res.send('');
  });
};

export default routes;
