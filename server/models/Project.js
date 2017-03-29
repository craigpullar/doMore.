class Project {
	constructor(id) {
		this.id = id || -1;
	}

	create(name,due_date,git_releases,links,notes){
		this.name = name;
		this.due_date = due_date;
		this.git_releases = git_releases;
		this.links = links;
		this.notes = notes;
	}

	createFromBundle(bundle) {
		this.name = bundle.name;
		this.due_date = bundle.due_date;
		this.git_releases = bundle.git_releases;
		this.links = bundle.links;
		this.notes = bundle.notes;
	}

	//* GETTERS *//
	get name() {
		return this.name;
	}
	get due_date(){
		return this.due_date;
	}
	get git_releases(){
		return this.git_releases;
	}
	get links() {
		return this.links;
	}
	get notes(){
		return this.notes;
	}
	
		//* Setters *//
		set name(name) {
			this.name = name;
		}
		get due_date(due_date){
			this.due_date = due_date;
		}
		get git_releases(git_release){
			this.git_releases = git_releases;
		}
		get links(links) {
			this.links = links;
		}
		get notes(notes){
			this.notes = notes;
		}
	}