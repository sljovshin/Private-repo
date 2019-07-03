const express = require('express');
const router = express.Router();
const controller = require('../controllers/defaultController')

/* Routes */
router.all('/*', (req, res, next) => {
      req.app.locals.layout = 'default';
      next();
  });
  

router.route('/')
      .get(controller.index);

router.route('/login')
      .get(controller.loginGet)
      .post(controller.loginPost);

router.route('register')
      .get(controller.registerGet)
      .post(controller.registerPost);


module.exports = router;