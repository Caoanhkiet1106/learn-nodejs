import { engine } from 'express-handlebars';
import express from 'express';


const app = express()
const port = 3000

app.use(express.static('src/public'))


// template enginee
app.engine('hbs', engine());
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');
app.engine('.hbs', engine({extname: '.hbs'}));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})