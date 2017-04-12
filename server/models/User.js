class User {

	constructor(id) {
		this.id = id || -1;
	}

	create(username, email, password) {
		this.username = username;
		this.email = email;
		this.password = password;

	}

	createFromBundle(bundle) {
		this.username = bundle.username;
		this.email = bundle.email;
		this.password = bundle.password;
	}

	getBundle() {
		return {
			id : this.id,
			username : this.username,
			email : this.email,
			password : this.password,
		};
	}

	prettyPrint() {
		console.log(JSON.stringify(this.getBundle(), null, 2));
	}
	
}


module.exports = User;