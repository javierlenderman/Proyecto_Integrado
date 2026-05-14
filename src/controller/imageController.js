const connection = require('../conexion');

const getImage = (req, res) => {
    const name = req.session.name;
    const sql = 'SELECT profile_picture FROM users WHERE name = ?';

    connection.query(sql, [name], (err, results) => {
        if (err) {
            console.error('Error fetching profile picture:', err);
            res.status(500).send('Error fetching profile picture');
            return;
        }

        if (results.length > 0 && results[0].profile_picture) {
            res.contentType('image/jpeg');
            res.send(results[0].profile_picture);
        } else {
            res.status(404).send('Profile picture not found');
        }
    });
};

const updateProfilePicture = async (req, res) => {
    const name = req.session.name;
    const image = req.file;
    if (!image) {
        res.redirect('/perfil?mensaje=' + encodeURIComponent('Error uploading profile picture'));
        return;
    }

    const updateQuery = 'UPDATE users SET profile_picture = ? WHERE name = ?';
    const values = [image.buffer, name];

    connection.query(updateQuery, values, (error) => {
        if (error) {
            res.redirect('/perfil?mensaje=' + encodeURIComponent('Error updating profile picture'));
            return;
        }
        res.redirect('perfil');
    });
};

const getWeaponImage = (req, res) => {
    const query = 'SELECT image FROM weapons WHERE id = ?';
    connection.query(query, [req.params.id], (err, results) => {
        if (err || results.length === 0 || !results[0].image) {
            res.status(404).send('Image not found');
            return;
        }
        res.set('Content-Type', 'image/jpeg');
        res.set('Cache-Control', 'public, max-age=86400');
        res.send(results[0].image);
    });
};

module.exports = {
    updateProfilePicture,
    getImage,
    getWeaponImage
}