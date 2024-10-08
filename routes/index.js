/* Dzina Butko ID 301215947  Assignment Date  08/02/2021*/


var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home',});
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me',});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects',});
});

/* GET Services. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services',});
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me',});
});


module.exports = router;
