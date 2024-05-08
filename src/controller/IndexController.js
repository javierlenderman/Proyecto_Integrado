const getIndex = (req, res) => {
    res.render('index');
};

const getLogin = (req, res) => {
    res.render('login')
}

const getRegistre = (req, res) => {
    res.render('registro')
}

module.exports = {
    getIndex,
    getLogin,
    getRegistre
};