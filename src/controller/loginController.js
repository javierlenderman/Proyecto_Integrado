const bcrypt = require('bcryptjs');
const connection = require('../conexion');

const damageTypeImages = {
    'Kinetic': 'kinetic.svg',
    'Solar': 'solar.svg',
    'Arc': 'arc.svg',
    'Void': 'void.svg',
    'Stasis': 'stasis.svg',
    'Strand': 'strand.svg'
};

const ammoTypeImages = {
    'Primary': 'ammo-primary.svg',
    'Special': 'ammo-special.svg',
    'Heavy': 'ammo-heavy.svg'
};

const getIndex = (req, res) => {
    const query = `SELECT id, name, damage_type, ammunition, obtention
                   FROM weapons
                   WHERE obtention != 'World'
                   ORDER BY obtention, name`;

    connection.query(query, (err, weapons) => {
        if (err) {
            console.error('Error fetching weapons:', err);
            res.render('index', { mensaje: '', raids: {}, damageTypeImages, ammoTypeImages });
            return;
        }

        const raids = {};
        weapons.forEach(w => {
            if (!raids[w.obtention]) {
                raids[w.obtention] = [];
            }
            raids[w.obtention].push(w);
        });

        res.render('index', { mensaje: '', raids, damageTypeImages, ammoTypeImages });
    });
};

const getLogin = (req, res) => {
    res.render('login');
};

const getRegistro = (req, res) => {
    res.render('registro');
};

const postLogin = async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const query = 'SELECT * FROM users WHERE name = ?';

    connection.query(query, [name], async (err, results) => {
        if (err) {
            console.error('Error during login:', err);
            res.render('login');
            return;
        }
        if (results.length > 0) {
            const validPassword = await bcrypt.compare(password, results[0].user_password);
            if (validPassword) {
                req.session.loggedIn = true;
                req.session.name = name;
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
    const { name, password, class: userClass } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const insertQuery = 'INSERT INTO users (name, user_password, class) VALUES (?, ?, ?)';
    const values = [name, hashedPassword, userClass];

    connection.query(insertQuery, values, (error) => {
        if (error) {
            console.error('Error registering user:', error);
            res.render('registro');
            return;
        }
        res.redirect('/');
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
