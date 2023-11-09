var ant = require('../models/ant');
// List of all ant
exports.ant_list = function(req, res) {
 res.send('NOT IMPLEMENTED: ant list');
};
// for a specific ant.
exports.ant_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: ant detail: ' + req.params.id);
};
// Handle ant create on POST.
exports.ant_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: ant create POST');
};
// Handle ant delete form on DELETE.
exports.ant_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: ant delete DELETE ' + req.params.id);
};
// Handle ant update form on PUT.
exports.ant_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: ant update PUT' + req.params.id);
};
exports.ant_list = async function(req, res) {
    try{
    theant = await ant.find();
    res.send(theant);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// VIEWS
// Handle a show all view
exports.ant_view_all_Page = async function(req, res) {
    try{
    theant = await ant.find();
    res.render('ant', { title: 'antSearch Results', results: theant });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // Handle ant create on POST.
exports.ant_create_post = async function(req, res) {
    console.log(req.body)
    let document = new ant();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"ant_type":"goat", "cost":12, "size":"large"}
    document.passengerName = req.body.antName;
    document.ticketNumber = req.body.antAge;
    document.seatNumber = req.body.antColor;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };