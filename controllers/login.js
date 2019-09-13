const login =require('../models').logins;

const loginUser = [
  (req, res, next)=>{
  login.findOrCreate({where: {id:1,name: 'sam'}, defaults: {password: '123'}})
  .then(([user, created]) => {
    console.log(user.get({
      plain: true
    }))
    console.log(created)
  })
}
]

exports.loginUser = loginUser;