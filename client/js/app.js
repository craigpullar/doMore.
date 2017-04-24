/* Main */
import React from 'react';
import ReactDOM from 'react-dom';

import * as globals from "./globals";
import LoginForm from "./login";
import * as Projects from "./projects";
// import ProjectFilter from "./projects";
import * as API from "./api";


let login_page = document.querySelector("#loginPage");
let projects_page = document.querySelector("#projectsPage");

if (login_page) {
	if(globals.qs.error) ReactDOM.render(<LoginForm heading="doMore." action="/api/login" error='username/password did not match' />,login_page);
	ReactDOM.render(<LoginForm heading="doMore." action="/api/login" error=""/>,login_page);
}
if (projects_page) {
	ReactDOM.render(<Projects.ProjectFilter />, projects_page.querySelector('.filterSelector'));
}




