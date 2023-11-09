require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var antRouter = require('./routes/ant');
var gridbuildRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var ant = require("./models/ant");
var resourceRouter=require("./routes/resource");



 
 
var app = express();
 
const connectionString = process.env.MONGO_CON;
mongoose = require('mongoose');
mongoose.connect(connectionString);
 
// Get the default connection
var db = mongoose.connection;
 
// Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
  console.log("Connection to DB succeeded");
});
 
// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ant', antRouter);
app.use('/board', gridbuildRouter);
app.use('/choose', chooseRouter);
app.use('/resource',resourceRouter);


 
// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
 
// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});
 
async function recreateDB() {
  // Delete everything
  await ant.deleteMany();
  let instance1 = new ant({ antName: "herry", antAge: 11, antColor: "black" });
  await instance1.save();
  console.log("First object saved");
  let instance2 = new ant({ antName: "beck", antAge: 2,antColor: "white" });
  await instance2.save();
  console.log("Second object saved");
  let instance3 = new ant({ antName: "Lav", antAge: 10, antColor: "red" });
  await instance3.save();
  console.log("Third object saved");
}
 
let reseed = true;
if (reseed) {
  recreateDB();
}
 
module.exports = app;

exports.dogs_create_post = async function(req, res) {
console.log(req.body)
let document = new dogs();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.dogs_type = req.body.dogs_type;
document.cost = req.body.cost;
document.size = req.body.size;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
 
};
// Handle Costume delete form on DELETE.
exports.dogs_delete = function(req, res) {
res.send('NOT IMPLEMENTED: dogs delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.dogs_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: dogs update PUT' + req.params.id);
};
 
// VIEWS
// Handle a show all view
exports.dogs_view_all_Page = async function(req, res) {
    try{
    thedogs = await dogs.find();
    res.render('dogs', { title: 'Costume Search Results', results: thedogs });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };