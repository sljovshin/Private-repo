const Article = require('../models/ArticleModel');
const Category = require('../models/CategoryModel');

module.exports = {

    index: (req, res) => {
        res.render('admin/index');
    },
    /* ARTICLES */
    getArticles: (req, res) => {
        Article.find()
               .populate('category')
               .then( articles => {
            res.render('admin/articles/index', { articles: articles })
        });
    },
    submitArticle: (req, res) => {
        const commentsAllowed = req.body.allowComments ? true : false;

        const newArticle = new Article({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            allowComments: commentsAllowed,
            category: req.body.category
        });
        newArticle.save().then(article => {
            console.log(article);
            req.flash('success-message', 'Article created!');
            res.redirect('/admin/articles');
        });
    },
    createArticle: (req, res) => {
        Category.find().then( categories => {
            res.render('admin/articles/create', {categories: categories});
        });

    },
    editArticle: (req, res) => {
        const id = req.params.id;

        Article.findById(id)
            .then(article => {

                Category.find().then(cats => {
                    res.render('admin/articles/edit', {article: article, categories: cats});
                });


            });
    },
    editArticleSubmit: (req, res) => {
        const commentsAllowed = req.body.allowComments ? true : false;
        const id = req.params.id;

        Article.findById(id)
            .then(article => {
                article.title = req.body.title;
                article.status = req.body.status;
                article.allowComments = req.body.allowComments;
                article.description = req.body.description;
                article.category = req.body.category;
                article.save().then(updateArticle => {
                    req.flash('success-message', `${updateArticle.title} has been updated.`);
                    res.redirect('/admin/articles');
                })
            
        })


    },
    deleteArticle: (req, res) => {
        Article.findByIdAndDelete(req.params.id)
               .then( deletedArticle => {
                   req.flash('success-message', `${deletedArticle.title} has been deleted.`);
                   res.redirect('/admin/articles');
               })
               .catch(err => console.log(err));
    },
    /* CATEGORIES */
    getCategories: (req, res) => {
        Category.find().then(categories => {
            res.render('admin/category/index', {categories: categories});
        });
    },
    createCategory: (req, res) => {
        let categoryName = req.body.name;
        console.log(categoryName);

        if (categoryName) {
            const newCategory = new Category({
                title: categoryName
            });

            newCategory.save().then(category => {
                res.status(200).json(category);
            });
        }
    },
    editCategoriesGet: async (req, res) => {
        const catID = req.params.id;
        const cats = await Category.find();

        Category.findById(catID).then(cat => {
            res.render('admin/category/edit', {category: cat, categories: cats});
        });
    },

    editCategoriesPost: (req, res) => {
        const catId = req.params.id;
        const newTitle = req.body.name;

        if (newTitle) {
            Category.findById(catId).then(category => {

                category.title = newTitle;

                category.save().then(updated => {
                    res.status(200).json({url: '/admin/category'});
                });

            });
        }
    }
               
}