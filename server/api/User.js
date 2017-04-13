	let tk = require('./../globals');
	let User = require('./../models/User');

	let options = {

		add : (db, bundle, callback) => {
			let user = new User(tk.idGen());
			user.createFromBundle(bundle);
			db.def.table('users').insert(user.getBundle()).run(db.conn,(err, result) => {
				if(err) callback(err);
				else callback(result);
			});
			
		},
		delete : (db,id, callback) => {
			let filter = {};
			filter.id = isNaN(id) ? id : parseInt(id);
			db.def.table('users').filter(filter).delete().run(db.conn,(err, result) => {
				if(err) callback(err);
				else callback(result);
			});
		},
		updateById : (db,id, data, callback) => {
			let filter = {};
			filter.id = isNaN(id) ? id : parseInt(id);
			db.def.table('users').filter(filter).update(data).
			run(connection, function(err, result) {
				if(err) callback(err);
				else callback(result);
			});
			
		},
		getAll : (db, callback) => {
			db.def.table('users').run(db.conn).then((cursor) => {
				return cursor.toArray();
			}).then((results) => {
				callback(results);
			});
		},
		filterByValue : (db, field, value, callback) => {
			let filter = {};
			filter[field] = isNaN(value) ? value : parseInt(value);
			db.def.table('users').filter(filter).run(db.conn).then((cursor) => {
				return cursor.toArray();
			}).then((results) => {
				callback(results);
			});

		},
		login : (db, payload, callback) => {
			let username = payload.username;
			let password = payload.password;


			options.filterByValue(db,'username', username,(results) => {
				if(!results.length) callback(1, null);
				if(results[0].password == password) 
					callback(null, results[0]);
				else 
					callback(2, results[0]);
				
			});
		},

	};

	module.exports = options;