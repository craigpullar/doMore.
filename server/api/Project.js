	let tk = require('./../globals');
	let Project = require('./../models/Project');

	let options = {

		add : (db, bundle, callback) => {
			let project = new Project(tk.idGen());
			project.createFromBundle(bundle);
			db.def.table('projects').insert(project.getBundle()).run(db.conn,(err, result) => {
				if(err) callback(err);
				else callback(result);
			});
			
		},
		delete : (db,id, callback) => {
			let filter = {};
			filter.id = isNaN(id) ? id : parseInt(id);
			db.def.table('projects').filter(filter).delete().run(db.conn,(err, result) => {
				if(err) callback(err);
				else callback(result);
			});
		},
		updateById : (db,id, data, callback) => {
			let filter = {};
			filter.id = isNaN(id) ? id : parseInt(id);
			db.def.table('projects').filter(filter).update(data).
			run(connection, function(err, result) {
				if(err) callback(err);
				else callback(result);
			});
			
		},
		getAll : (db, callback) => {
			db.def.table('projects').run(db.conn).then((cursor) => {
				return cursor.toArray();
			}).then((results) => {
				callback(results);
			});
		},
		filterByValue : (db, field, value, callback) => {
			let filter = {};
			filter[field] = isNaN(value) ? value : parseInt(value);
			db.def.table('projects').filter(filter).run(db.conn).then((cursor) => {
				return cursor.toArray();
			}).then((results) => {
				callback(results);
			});

		},

	};

	module.exports = options;