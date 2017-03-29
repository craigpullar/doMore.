
class Database {

	constructor(){
	}

	connect(host,port,pass,name){
		this.host = host;
		this.port = port;
		this.pass = pass;
		this.name = name;
		this.r = require('rethinkdb');
		this.r.connect({host : host, port : port, pass : pass}, (err, conn) => {
			if (err) console.log(err);
			this.conn = conn;
			this.conn.db = name;
			console.log('Connected to db: ' + this.name);
		});
	}
}

module.exports = new Database();





