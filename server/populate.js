//This script will be used to generate our db table and populate some dummy projects
module.exports = (db, conn) => {

	//Create projects table
	db.tableCreate('projects').run(conn,(err, results)=> {
		if(err) console.log(err);
		console.log(JSON.stringify(result, null, 2));
	});
	//Create projects table
	db.tableCreate('git_releases').run(conn,(err, results)=> {
		if(err) console.log(err);
		console.log(JSON.stringify(result, null, 2));
	});


	//Inset 5 random projects
	//Insert 10 random git release spread across projects
}