module.exports = {

    index: (req, res) => {
        res.render('default/index');
    },
    loginGet: (req, res) => {
        res.render('default/login');
    },
    loginPost: (req, res) => {
        res.send('default/login');
    },
    registerGet: (req, res) => {
        res.send('default/regget');
    },
    registerPost: (req, res) => {
        res.send('default/regpost');
    },
}