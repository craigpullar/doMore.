import React from 'react';
import ReactDOM from 'react-dom';
import * as API from "./api";

class Link extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div className="link" >
			<div className="col-sm-11 no-pad">
			<p>{this.props.link}</p>
			</div>
			<div className="col-sm-1 no-pad">
			<i className="material-icons" id={this.props.index} onClick={this.props.deleteHandler}>delete_forever</i>
			</div>
			</div>

			);
		}
	}
	//comment to reset syntax highlighting //
	class NewProjectForm extends React.Component {

		constructor(props) {
			super(props);

			this.addNewLink = this.addNewLink.bind(this);
			this.inputChange = this.inputChange.bind(this);
			this.removeLink = this.removeLink.bind(this);
			this.formSubmission = this.formSubmission.bind(this);


			this.state = {
				inputs : {
					link: null,
					name: null,
					due_date : null,
					git : null,
					jira : null
				},
				validate : {
					error : false,
					message : null
				},
				links : []
			}

		}

		validate() {
			//Check for present Name
			if(!this.state.inputs.name)
				return {
					error: true,
					message : 'Project Name required'
				};

				//Check for due date
				if(!this.state.inputs.due_date)
					return {
						error: true,
						message : 'Date required'
					};

					return {
						error: false,
						message : null
					}

				}

				formSubmission(event) {
					event.preventDefault();
					let validate = this.validate();

					if(validate.error) {
						this.setState({
							validate : validate
						});
						return false;
					}

					//If no validation errors kick off API call
					let data = {name : this.state.inputs.name,
						due_date :this.state.inputs.due_date,
						git_releases :[],
						links : this.state.links,
						notes : [],
						created : new Date(),
						status : 0,
						git_repo : this.state.inputs.git,
						user : null
					};

					var r = new XMLHttpRequest(); 
					r.open("POST", "/api/Project", true);
					r.setRequestHeader("Content-type", "application/json");
					r.onreadystatechange =  () => {
						if (r.readyState != 4 || r.status != 200) return; 
						let json = JSON.parse(r.responseText);
						window.location.replace("/");

					};
					r.send(JSON.stringify(data));



				}
				inputChange(event, index) {
					let partial = this.state;
					partial.validate.error = false;
					partial.inputs[index] = event.target.value;
					this.setState(partial);
				}


				removeLink(event) {
					let new_links = this.state.links;
					new_links.splice(event.target.id, 1);
					this.setState({
						links: new_links
					});

				}
				addNewLink() {
					let link_area = document.querySelector('.link-append');
					let new_links = this.state.links;

					new_links.push(this.state.inputs.link);

					this.setState({
						links : new_links
					});
					this.state.inputs.link = '';
				}
				render() {
					const links = this.state.links.map((item, key) => {
						return <Link link={item} deleteHandler={this.removeLink} index={key}/>
					});
					// comment to reset syntax //
					return(
						
						<form className="NewProjectForm" onSubmit={this.formSubmission} method="POST">
						<div className="container">
						<div className="row">
						<div className="col-sm-12">
						<h1><i className="material-icons">arrow_back</i> New Project</h1>
						</div>
						</div>
						</div>
						<div className="container">
						<div className="row">
						<div className="col-sm-12">
						{ this.state.validate.error ?<p className="error">{this.state.validate.message}</p> : null }	
						<input type="text" id="ProjectName" placeholder="Project Name" value={this.state.inputs.name} onChange={event => this.inputChange(event, 'name')}/>
						</div>
						<div className="col-sm-6">
						<input type="date" id="DueDate" value={this.state.inputs.due_date} onChange={event => this.inputChange(event, 'due_date')}/>
						</div>
						<div className="col-sm-6">
						<input type="text" id="JiraLink" placeholder="Jira Link" value={this.state.inputs.jira} onChange={event => this.inputChange(event, 'jira')}/>	
						</div>
						</div>
						</div>
						<div className="container">
						<div className="row">
						<div className="col-sm-12">
						<h4>Resource Links</h4>
						<div className="link-append">
						{links}
						</div>
						<div className="col-sm-11 no-pad">
						<input type="text" id="NewLink" placeholder="New Link" ref="link_input" value={this.state.inputs.link} onChange={event => this.inputChange(event, 'link')}/>
						</div>
						<div className="col-sm-1 no-pad">
						<i className="material-icons add_link" onClick={this.addNewLink}>add_circle</i>
						</div>
						</div>
						</div>
						</div>
						<div className="container">
						<div className="row">
						<div className="col-sm-12">
						<h4>Git</h4>
						<input type="text" id="Git" placeholder="Git Repo" value={this.state.inputs.git} onChange={event => this.inputChange(event, 'git')}/>
						<input type="submit" value="Add Project" />
						</div>
						</div>
						</div>
						</form>
						);
				}
			}


			export default NewProjectForm;