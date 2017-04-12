
class Note {
	constructor(id) {
		this.id = id || -1;
	}

	create(content, created){
		this.content = content;
		this.date = date;
	}

	createFromBundle(bundle) {
		this.content = bundle.content;
		this.created = bundle.created;
	}

	getBundle() {
		return {
			id : this.id,
			content : this.content,
			created : this.created
		};
	}

	prettyPrint() {
		console.log(JSON.stringify(this.getBundle(), null, 2));
	}

}

module.exports = Note;