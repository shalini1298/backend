const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const passport=require('passport');
var cors = require('cors')
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var port = process.env.PORT || 3000;
app.listen(port);
app.use(cors());
var models = require("./models");

models.sequelize.sync().then(function(){
    console.log('Database looks fine!');
}).catch(function(err) {
    console.log(err,'Something went wrong');
});

require('./config/passport.js')(app);

app.get('/', (req, res) => res.status(200).send({
message: 'Welcome to the beginning.',
}));

app.use('/api', require('./routes/login').router);

app.use('/api', require('./routes/items').router);

// app.get('./routes/items',(req,res)=> res.status(200).send({
//     message:'Welcome',
// }));

//app.use('/login',require('./controllers/login').controller);

//app.use('/items',require('./controllers/items').controller);

app.post('./routes/login',(req,res)=> res.status(200).send({
    name:req.body.name, 
    password:req.body.password,
}));

app.post('/login',
passport.authenticate('local',{
    successRedirect:'/items',
    failureRedirect:'/'
}));

module.exports = app;