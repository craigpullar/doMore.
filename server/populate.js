//This script will be used to generate our db table and populate some dummy projects
module.exports = (db, conn) => {

	let Project = require('./models/Project');	
	let GitRelease = require('./models/GitRelease');
	let Note = require('./models/Note');
	let tk = require('./globals');

	let v1 = new GitRelease(tk.idGen());
	v1.createFromBundle({
		version_number : 'V1.0.0',
		tasks : [],
		status : GitRelease.status().COMMITTED
	});
	let v2 = new GitRelease(tk.idGen());
	v2.createFromBundle({
		version_number : 'V2.0.0',
		tasks : ['Make logo bigger', 'Introduce new sketchpad feature', 'Upload I love the snails video', 'Just do it'],
		status : GitRelease.status().OPEN
	});

	let n1 = new Note(tk.idGen());
	n1.createFromBundle({
		content : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae tempor mi. Vivamus justo nisl, aliquet non lectus ut, placerat interdum ex. Curabitur nulla neque, sagittis vel tortor posuere, faucibus bibendum lectus. Donec dictum nisl feugiat ultrices sagittis. Nam in diam vel neque posuere auctor.`,
		created : new Date()
	});

	let n2 = new Note(tk.idGen());
	n2.createFromBundle({
		content : `Donec eget sapien in quam imperdiet sollicitudin. Proin scelerisque fermentum velit. Praesent tempor libero ac lacus bibendum viverra.`,
		created : new Date()
	});


	let n_learn_more = new Project(tk.idGen());
	n_learn_more.createFromBundle({
		name : 'GCSP-7904-Nordics-Learn-More',
		due_date : new Date(2017,4,4).,
		git_releases :[v2.id,v2.id],
		links : ['Design::https://wetransfer.com/', 'Jira::https://jira.homeawaycorp.com/browse/GCSP-9416'],
		notes : [n1.id,n2.id],
		created : new Date(),
		status : Project.status().READY,
		git_repo : 'blah blah'
	});

	console.log(n_learn_more.getBundle());
	// console.log(n_learn_more.getBundle());
	db.r.db(db.name).table('projects').insert(n_learn_more.getBundle()).run(conn, function(err, results){
		if (err) console.log(err);
		console.log(results);
	});

}