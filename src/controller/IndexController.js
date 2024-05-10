const connection = require('../conexion');

const getIndex = (req, res) => {
    res.render('index');
};

const getLogin = (req, res) => {
    res.render('login')
};

const getRegistre = (req, res) => {
    res.render('registro')
};

const postRegister = async (req, res) => {
    console.log(req.body);
    const {gmail, name, user_password, clase} = req.body;
    const insertQuery ='INSERT INTO pi.users (gmail, name, user_password, class) VALUES (?, ?, ?, ?)';
    const values = [gmail, name, user_password, clase];
    connection.query(insertQuery, values, function(error, results, fields) {
    if (error) {
        console.error('Error al insertar usuario:', error);
        return;
    }
    res.render('index',{ mensaje: 'Usuario registrado' });
    });
};

const postLogin = (req, res) => {
    const gmail = req.body.gmail;
    const user_password = req.body.user_password;
    const query = 'SELECT * FROM pi.users WHERE gmail = ?';
   
    connection.query(query, [gmail], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            //const validPassword = bcrypt.compare(password, results[0].contraseña);
                if (user_password == results[0].user_password) {
                    req.session.loggedIn = true; 
                    req.session.gmail = gmail;
                    res.render('index'), { mensaje: 'Sesion iniciada'}, req.session;
                } else {
                    res.render('login');
                }
   
        } else {
            res.render('login');
        }
    });
};

module.exports = {
    getIndex,
    getLogin,
    getRegistre,
    postRegister,
    postLogin
};