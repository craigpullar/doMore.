/* Components */
import React from 'react';
import ReactDOM from 'react-dom';

class LoginForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username : '',
			password : '',
			error : {
				show : props.error ? 1 : 0,
				message : props.error
			}
		};

		this.formSubmission = this.formSubmission.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.validate = this.validate.bind(this);

	}
	render() {
		return(
			<form className="LoginForm" onSubmit={this.formSubmission} action={this.props.action} method="POST">
			<h1>{this.props.heading}</h1>
			{ this.state.error.show ? <p className="error">{this.state.error.message}</p> : null }	
			<div className="input-wrapper">
			<input id="username" type="text" name="username" 
			placeholder="username" value={this.state.username} 
			onChange={this.handleInputChange}/>
			<input id="password" type="password" name="password" 
			placeholder="password" value={this.state.password} 
			onChange={this.handleInputChange}/>
			<input type="submit" value="➤"/>
			</div>
			</form>
			);
	}


	handleInputChange(event) {
		this.setState({
			[event.target.id] : event.target.value,
			error : {
				show : 0
			}
		});
	}

	validate(username,password) {
		let results = {
			'pass' : false,
			'error' : ""
		}
		if (username.length < 1 || password.length < 1) {
			results.error = "Please enter username/password";
			return results;
		}
		results.pass = true;
		return results;
	}

	formSubmission(e) {
		e.preventDefault();
		let validation = this.validate(this.state.username, this.state.password);
		if(!validation.pass) {
			this.setState({
				error : {
					show : 1,
					message : validation.error
				}
			});
			return false;
		}
		e.target.submit();

	}
}

export default LoginForm;