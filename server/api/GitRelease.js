	let tk = require('../globals');
	let GitRelease = require('../models/GitRelease');

	let options = {

		add : (db, bundle, callback) => {
			let release = new GitRelease(tk.idGen());
			release.createFromBundle(bundle);
			db.r.db(db.name).table('git_releases').insert(release.getBundle()).run(db.conn,(err, result) => {
				if(err) callback(err);
				else callback(result);
			});
			
		},
		delete : (db,id, callback) => {
			let filter = {};
			filter.id = isNaN(id) ? id : parseInt(id);
			db.r.db(db.name).table('git_releases').filter(filter).delete().run(db.conn,(err, result) => {
				if(err) callback(err);
				else callback(result);
			});
		},
		updateById : (db,id, data, callback) => {
			let filter = {};
			filter.id = isNaN(id) ? id : parseInt(id);
			db.r.db(db.name).table('git_releases').filter(filter).update(data).
			run(connection, function(err, result) {
				if(err) callback(err);
				else callback(result);
			});
			
		},
		filterByValue : (db, field, value, callback) => {
			let filter = {};
			filter[field] = isNaN(value) ? value : parseInt(value);
			db.r.db(db.name).table('git_releases').filter(filter).run(db.conn).then((cursor) => {
				return cursor.toArray();
			}).then((results) => {
				callback(results);
			});

		},
		getField : (db,field, callback) => {
			db.r.db(db.name).table('git_releases').getField(field).run(db.conn).then((cursor) => {
				return cursor.toArray();
			}).then((results) => {
				callback(results);
			});

		},
		getAll : (db,callback) => {
			db.r.db(db.name).table('git_releases').run(db.conn).then((cursor) => {
				return cursor.toArray();
			}).then((results) => {
				callback(results);
			});
		},

	};



	module.exports = options;