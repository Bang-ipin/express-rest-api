var express         = require('express');
var router          = express.Router();
var userrouter      = express.Router();

const routes = (app) => {

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    //Default router 
    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
    });
    

    //API ROUTER USERS
    userrouter.get('/', function(req, res, next) {
        res.send('Ini adalah respon GET user');
    });
    userrouter.post('/', function(req, res, next) {
        res.send('Ini adalah respon POST user');
    });
    userrouter.put('/:id', function(req, res, next) {
        res.send('Ini adalah respon PUT user');
    });
    userrouter.delete('/:id', function(req, res, next) {
        res.send('Ini adalah respon DESTROY user');
    });
    

    /********** ALIASES **************/
    app.use("/", router);
    app.use("/api/users", userrouter);


}
module.exports = routes;
