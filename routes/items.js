const express = require('express');
const router =express.Router();
const controllers = require('../controllers');

router.get('/items',(req,res,next)=>{
    res.status(200).json({
        message:'success'
    });
});

router.post('/items', controllers.items.itemList);
router.put('/items', controllers.items.update_itemList);
router.delete('/items', controllers.items.destroy_itemList);

 module.exports.router = router;