const connection = require('../conexion');

const getIndex = (req, res) => {
    res.render('index');
};

const getLogin = (req, res) => {
    res.render('login')
}

const getRegistre = (req, res) => {
    res.render('registro')
}

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

const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.contraseña;
    const query = 'SELECT * FROM pi.users WHERE name = ?';
   
    connection.query(query, [username], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            const validPassword = bcrypt.compare(password, results[0].contraseña);
                if (validPassword) {
                    req.session.loggedIn = true; 
                    req.session.username = username;
                    res.redirect('/dashboard');
                } else {
                    res.render('index', { mensaje: 'Contraseña inválida' });
                }
   
        } else {
            res.render('index', { mensaje: 'Usuario no valido' }); 
        }
    
    });
};

module.exports = {
    getIndex,
    getLogin,
    getRegistre,
    postRegister
};