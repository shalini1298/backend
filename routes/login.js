const express = require('express');
const router =express.Router();
const controllers = require('../controllers');

router.get('/login',(req,res,next)=>{
    res.status(200).json({
        message:'success'
    });
});

// router.post('/login',(req,res,next)=>{
//      res.status(200).json({
//          message:'Done'
//      });
//  });
// router.get('/',controllers.login.loginUser)

router.post('/login', controllers.login.loginUser);


module.exports.router = router;