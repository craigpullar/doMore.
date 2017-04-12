let routes = require('./models/Routes');
let db = require('./database');
db.connect('localhost', 28015, '{admin_pass}', 'doMore');




//Add API Routes
let API = require('./api/API');
API.routes(API, db, routes);



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
// routes.addRoute('GET', '/populate_db', (request,reply) => {
// 	let populate_db = require('./populate');	
// 	populate_db(db, db.conn);
// });
routes.addRoute('GET','/login', (request, reply) => {
	var data = {
		title: 'login',
	};
	return reply.view('login', data);
});




module.exports = routes.getRoutes();