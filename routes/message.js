var express = require('express');
var router = express.Router();
const { messages:messages } = require('./index.js')

router.get('/', function(req, res, next) {
    res.render('forms', { title: 'Express'})
  });

router.post("/new", function(req,res,next){
    const author = req.body.author
    const reqMessage = req.body.message
    messages.push({user: author, text: reqMessage, added: new Date()});
    console.log(author, reqMessage)
    res.redirect('/')
  })

  module.exports = router;