let routes = require('./models/Routes');


//Pages Routes
routes.addRoute('GET','/', (request,reply) => {
   var data = {
    title: 'This is Index!',
    message: 'Hello, World. You crazy handlebars layout'
};
return reply.view('index', data);
});


//Resource Routes
routes.addRoute('GET','/js/deploy.js', (request,reply) => {
    reply.file('./client/js/deploy.js');
});
routes.addRoute('GET', '/css/deploy.css', (request,reply) => {
    reply.file('./client/css/deploy.css');
});


module.exports = routes.getRoutes();