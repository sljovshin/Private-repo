const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
});


router.route('/')
      .get(adminController.index);

router.route('/articles')
      .get(adminController.getArticles);
      

router.route('/articles/create')
      .get(adminController.createArticle)
      .post(adminController.submitArticle);

router.route('/articles/edit/:id')
      .get(adminController.editArticle);

module.exports = router;