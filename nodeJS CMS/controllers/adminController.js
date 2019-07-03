const Article = require('../models/ArticleModel');

module.exports = {

    index: (req, res) => {
        res.render('admin/index');
    },
    getArticles: (req, res) => {
        Article.find().then( articles => {
            res.render('admin/articles/index', { articles: articles })
        });
    },
    submitArticle: (req, res) => {


        const newArticle = new Article({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            allowComments: req.body.allowComments
        });
        newArticle.save().then(article => {
            console.log(article);
            req.flash('success-message', 'Article created!');
            res.redirect('/admin/articles');
        });
    },
    createArticle: (req, res) => {
        res.render('admin/articles/create');
    },
    editArticle: (req, res) => {
        const id = req.params.id;

        Article.findById(id).then( article => {
            res.render('admin/articles/edit', {article: article});
        });
    }
}