var ant = require('../models/ant');
// List of all dogs
// exports.dogs_list = function(req, res) {
// res.send('NOT IMPLEMENTED: dogs list');
// };
// List of all dogs
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
// for a specific Costume.
exports.ant_detail = function(req, res) {
res.send('NOT IMPLEMENTED: ant detail: ' + req.params.id);
};
// Handle Costume create on POST.
// exports.costume_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: Costume create POST');
// };
exports.ant_create_post = async function(req, res) {
    console.log(req.body)
    let document = new ant();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.ant_type = req.body.ant_type;
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
    exports.ant_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: ant delete DELETE ' + req.params.id);
    };
    // Handle Costume update form on PUT.
    exports.ant_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: ant update PUT' + req.params.id);
    };
     
    // VIEWS
    // Handle a show all view
    exports.ant_view_all_Page = async function(req, res) {
        try{
        theant = await ant.find();
        res.render('ant', { title: 'ant Search Results', results: theant });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };