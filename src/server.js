const express = require('express');
const session = require('express-session');
const loginRoutes = require('./routes/login');
const imageRoutes = require('./routes/image');

const app = express();
const port = 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

// Static files
app.use(express.static(__dirname));

// View engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Routes
app.use('/', loginRoutes);
app.use('/', imageRoutes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
