const Article = require('../models/ArticleModel');
const Category = require('../models/CategoryModel');


module.exports = {

    index:  async (req, res) => {
        
        const article = await Article.find();
        const categories = await Category.find();
        
        res.render('default/index', {article: article, categories: categories});
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