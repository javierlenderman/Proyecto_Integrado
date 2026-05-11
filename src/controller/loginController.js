const bcrypt = require('bcryptjs');
const connection = require('../conexion');

const getIndex = (req, res) => {
    res.render('index', { mensaje: '' });
};

const getLogin = (req, res) => {
    res.render('login');
};

const getRegistro = (req, res) => {
    res.render('registro');
};

const postLogin = async (req, res) => {
    const username = req.body.username;
    const password = req.body.contraseña;
    const query = 'SELECT * FROM usuarios WHERE username = ?';

    connection.query(query, [username], async (err, results) => {
        if (err) {
            console.error('Error during login:', err);
            res.render('login');
            return;
        }
        if (results.length > 0) {
            const validPassword = await bcrypt.compare(password, results[0].contraseña);
            if (validPassword) {
                req.session.loggedIn = true;
                req.session.username = username;
                res.redirect('/');
            } else {
                res.render('login');
            }
        } else {
            res.render('login');
        }
    });
};

const postRegister = async (req, res) => {
    const { name, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const insertQuery = 'INSERT INTO usuarios (nombre, username, contraseña) VALUES (?, ?, ?)';
    const values = [name, username, hashedPassword];

    connection.query(insertQuery, values, (error) => {
        if (error) {
            console.error('Error registering user:', error);
            res.render('registro');
            return;
        }
        res.render('index', { mensaje: 'Usuario registrado' });
    });
};

const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
        }
        res.redirect('/');
    });
};

module.exports = {
    getIndex,
    getLogin,
    getRegistro,
    postLogin,
    postRegister,
    logout
};
