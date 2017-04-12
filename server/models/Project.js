class Project {
	constructor(id) {
		this.id = id || -1;
	}

	create(name,due_date,git_releases,links,notes, git_repo, status, created){
		this.name = name;
		this.due_date = due_date;
		this.git_releases = git_releases;
		this.links = links;
		this.notes = notes;
		this.created = created;
		this.status = status;
		this.git_repo = git_repo;
	}

	createFromBundle(bundle) {
		this.name = bundle.name;
		this.due_date = bundle.due_date;
		this.git_releases = bundle.git_releases;
		this.links = bundle.links;
		this.notes = bundle.notes;
		this.created = bundle.created;
		this.status = bundle.status;
		this.git_repo = bundle.git_repo;
	}

	getBundle() {
		return {
			id : this.id,
			name : this.name,
			due_date :this.due_date,
			git_releases :this.git_releases,
			links : this.links,
			notes : this.notes,
			created : this.created,
			status : this.status,
			git_repo : this.git_repo
		};
	}

	prettyPrint() {
		console.log(JSON.stringify(this.getBundle(), null, 2));
	}

	static status() {
		return {
			READY : 0,
			INPROGRESS : 1,
			IR : 2,
			QA : 3,
			DONE : 4
		};
	}

}

module.exports = Project;