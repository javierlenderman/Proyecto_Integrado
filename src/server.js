const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
//importamos las rutas
const loginRoutes = require('./routes/login');
const imageRoutes = require('./routes/image');
const indexRoutes = require('./routes/Index');
const loginRoutes1 = require('./routes/Login1');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'secret', // Cambia esta cadena secreta
    resave: false,
    saveUninitialized: true
}));

// Configuración para servir archivos estáticos
app.use(express.static(__dirname));
//plantillas
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Routes
app.use('/', loginRoutes);
app.use('/', imageRoutes);
app.use('/', indexRoutes);
app.use('/', loginRoutes1);


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});