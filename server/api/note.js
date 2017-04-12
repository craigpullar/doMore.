	let tk = require('./../globals');
	let Note = require('./../models/Note');

	let options = {

		add : (db, bundle, callback) => {
			let note = new Note(tk.idGen());
			note.createFromBundle(bundle);
			db.r.db(db.name).table('notes').insert(note.getBundle()).run(db.conn,(err, result) => {
				if(err) callback(err);
				else callback(result);
			});
			
		},
		delete : (db,id, callback) => {
			let filter = {};
			filter.id = isNaN(id) ? id : parseInt(id);
			db.r.db(db.name).table('notes').filter(filter).delete().run(db.conn,(err, result) => {
				if(err) callback(err);
				else callback(result);
			});
		},
		updateById : (db,id, data, callback) => {
			let filter = {};
			filter.id = isNaN(id) ? id : parseInt(id);
			db.r.db(db.name).table('notes').filter(filter).update(data).
			run(connection, function(err, result) {
				if(err) callback(err);
				else callback(result);
			});
			
		},
		getAll : (db, callback) => {
			db.r.db(db.name).table('notes').run(db.conn).then((cursor) => {
				return cursor.toArray();
			}).then((results) => {
				callback(results);
			});
		},
		filterByValue : (db, field, value, callback) => {
			let filter = {};
			filter[field] = isNaN(value) ? value : parseInt(value);
			db.r.db(db.name).table('notes').filter(filter).run(db.conn).then((cursor) => {
				return cursor.toArray();
			}).then((results) => {
				callback(results);
			});

		},

	};

	module.exports = options;