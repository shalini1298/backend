const items =require('../models').items;

const itemList = [
    (req, res, next)=>{
    items.findOrCreate({where: {id :req.body.id,item:req.body.item,quantity: req.body.quantity}, defaults: {status: 'pending'}})
    .then(([user, created]) => {
      console.log(user.get({
        plain: true
      }))
      console.log(created)
    })

  }
]

const update_itemList = [
  (req, res, next)=>{
  items.update({
    status: req.body.status,
  },
   {where: {id :req.body.id}})
  .then((items) => {
    console.log('updated')
    });
}
]

const destroy_itemList = [
  (req, res, next)=>{
  items.destroy(
   {where: {status:'delivered'},})
  .then((items) => {
    console.log('destroyed')
  });
}
]
  
  exports.itemList = itemList;
  exports.destroy_itemList =destroy_itemList ;
  exports.update_itemList=update_itemList;