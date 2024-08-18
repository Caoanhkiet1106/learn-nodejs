import { engine } from 'express-handlebars';
import express from 'express';
import routes from './routes/index.js';
import db from './config/db/index.js'
db.connect()

const app = express();
const port = 3000;

app.use(express.static('src/public'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// template enginee
app.engine('hbs', engine());
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');
app.engine('.hbs', engine({ extname: '.hbs' }));

routes(app);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
