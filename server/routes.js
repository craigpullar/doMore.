let routes = require('./models/Routes');
let db = require('./database');
db.connect('localhost', 28015, '{admin_pass}', 'doMore');




//Add API Routes
let API = require('./api/API');
API.routes(API, db, routes);



//Pages Routes



//Resource Routes
routes.addRoute('GET','/js/deploy.js', (request,reply) => {
	reply.file('./client/js/deploy.js');
});
routes.addRoute('GET','/imgs/{filename}', (request,reply) => {
	let file = request.params.filename;
	reply.file(`./client/imgs/${file}`);
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

routes.addRoute('GET','/', (request, reply) => {
	var data = {
		title: 'Projects',
	};
	return reply.view('projects', data);
});
routes.addRoute('GET','/new-project', (request, reply) => {
	var data = {
		title: 'New Project',
	};
	return reply.view('newProject', data);
});




module.exports = routes.getRoutes();