/* Main */
import React from 'react';
import ReactDOM from 'react-dom';

import * as globals from "./globals";
import * as components from "./components";
import LoginForm from "./login";

let login_page = document.querySelector("#loginPage");
if(globals.qs.error) ReactDOM.render(<LoginForm heading="doMore." action="/api/login" error='username/password did not match' />,login_page);
ReactDOM.render(<LoginForm heading="doMore." action="/api/login" error=""/>,login_page);




