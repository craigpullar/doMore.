/* API ROUTES */

let routes = (API, db, routes) => {

	// Git Release Routes
	routes.addRoute('GET', '/api/GitRelease', (request,reply) => {	
		API.GitRelease.getAll(db, (results)=> {
			reply(results);
		});
	});
	routes.addRoute('POST', '/api/GitRelease', (request,reply) => {	
		API.GitRelease.add(db,request.payload,(results) => {
			reply(results);
		});
	});
	routes.addRoute('DELETE', '/api/GitRelease/{id}', (request,reply) => {	
		API.GitRelease.delete(db,request.params.id,(results) => {
			reply(results);
		});
	});
	routes.addRoute('GET', '/api/GitRelease/{id}', (request,reply) => {
		API.GitRelease.filterByValue(db, 'id', request.params.id, (results)=> {
			reply(results);
		});
	});
	routes.addRoute('UPDATE', '/api/GitRelease/{id}', (request,reply) => {
		API.GitRelease.updateById(db, request.params.id, request.payload, (results)=> {
			reply(results);
		});
	});
	routes.addRoute('GET', '/api/GitRelease/{field}/{value}', (request,reply) => {
		API.GitRelease.filterByValue(db, request.params.field,  request.params.value, (results)=> {
			reply(results);
		});
	});

	//Note Routes
	routes.addRoute('GET', '/api/Note', (request, reply) => {
		API.Note.getAll(db, (results)=> {
			reply(results);
		});
	});
	routes.addRoute('GET', '/api/Note/{id}', (request, reply) => {
		API.Note.filterByValue(db, 'id', request.params.id, (results)=> {
			reply(results);
		});
	});
	routes.addRoute('GET', '/api/Note/{field}/{value}', (request,reply) => {
		API.Note.filterByValue(db, request.params.field,  request.params.value, (results)=> {
			reply(results);
		});
	});
	routes.addRoute('POST', '/api/Note', (request,reply) => {	
		API.Note.add(db,request.payload,(results) => {
			reply(results);
		});
	});
	routes.addRoute('DELETE', '/api/Note/{id}', (request,reply) => {	
		API.Note.delete(db,request.params.id,(results) => {
			reply(results);
		});
	});
	routes.addRoute('UPDATE', '/api/Note/{id}', (request,reply) => {
		API.Note.updateById(db, request.params.id, request.payload, (results)=> {
			reply(results);
		});
	});

	//Project Routes
	routes.addRoute('GET', '/api/Project', (request, reply) => {
		API.Project.getAll(db, (results)=> {
			reply(results);
		});
	});
	routes.addRoute('GET', '/api/Project/{id}', (request, reply) => {
		API.Project.filterByValue(db, 'id', request.params.id, (results)=> {
			reply(results);
		});
	});
	routes.addRoute('GET', '/api/Project/{field}/{value}', (request,reply) => {
		API.Project.filterByValue(db, request.params.field,  request.params.value, (results)=> {
			reply(results);
		});
	});
	routes.addRoute('POST', '/api/Project', (request,reply) => {	
		API.Project.add(db,request.payload,(results) => {
			reply(results);
		});
	});
	routes.addRoute('DELETE', '/api/Project/{id}', (request,reply) => {	
		API.Project.delete(db,request.params.id,(results) => {
			reply(results);
		});
	});
	routes.addRoute('UPDATE', '/api/Project/{id}', (request,reply) => {
		API.Project.updateById(db, request.params.id, request.payload, (results)=> {
			reply(results);
		});
	});

	//User Routes
	routes.addRoute('GET', '/api/User', (request, reply) => {
		API.User.getAll(db, (results)=> {
			reply(results);
		});
	});
	routes.addRoute('GET', '/api/User/{id}', (request, reply) => {
		API.User.filterByValue(db, 'id', request.params.id, (results)=> {
			reply(results);
		});
	});
	routes.addRoute('GET', '/api/User/{field}/{value}', (request,reply) => {
		API.User.filterByValue(db, request.params.field,  request.params.value, (results)=> {
			reply(results);
		});
	});
	routes.addRoute('POST', '/api/User', (request,reply) => {	
		API.User.add(db,request.payload,(results) => {
			reply(results);
		});
	});
	routes.addRoute('DELETE', '/api/User/{id}', (request,reply) => {	
		API.User.delete(db,request.params.id,(results) => {
			reply(results);
		});
	});
	routes.addRoute('UPDATE', '/api/User/{id}', (request,reply) => {
		API.User.updateById(db, request.params.id, request.payload, (results)=> {
			reply(results);
		});
	});
	routes.addRoute('POST', '/api/login', (request, reply) => {
		API.User.login(db,request.payload,(err,results)=> {
			if (err) reply.redirect(`/login?error=${err}`);
			reply.redirect('/');
		});
	});
	routes.addRoute('POST', '/api/logout', (request, reply) => {
		reply.redirect('/login');
	});

};

module.exports = routes;