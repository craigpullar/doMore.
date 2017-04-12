//This script will be used to generate our db table and populate some dummy projects
module.exports = (db, conn) => {
	let tk = require('./globals');
	let User = require('./models/User');

	let me = new User(tk.idGen());
	me.createFromBundle({
		username: 'admin',
		email: 'cpullar@homeaway.co.uk',
		password : 'xyz'
	});

	db.def.table('users').insert(me.getBundle()).run(db.conn, (err,result) => {
		if (err) console.log(err);
		console.log(JSON.stringify(result, null, 2));
	});

}