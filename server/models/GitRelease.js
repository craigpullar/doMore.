class GitRelease {

	constructor(id) {
		this.id = id || -1;
	}

	create(version_number, tasks, status) {
		this.version_number = version_number;
		this.tasks = tasks;
		this.status = status;
	}

	createFromBundle(bundle) {
		this.version_number = bundle.version_number;
		this.tasks = bundle.tasks;
		this.status = bundle.status;
	}

	getBundle() {
		return {
			id : this.id,
			version_number : this.version_number,
			tasks : this.tasks,
			status : this.status
		};
	}

	prettyPrint() {
		console.log(JSON.stringify(this.getBundle(), null, 2));
	}

	static status() {

		return {
			OPEN : 0,
			COMMITTED : 1,
		};
	};
	
}


module.exports = GitRelease;