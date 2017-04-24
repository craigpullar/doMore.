import React from 'react';
import ReactDOM from 'react-dom';
import * as API from "./api";


class ProjectCard extends React.Component {

	constructor(props) {
		super(props);
		this.getDate = this.getDate.bind(this);
		this.getStatus = this.getStatus.bind(this);
		this.isDueToday = this.isDueToday.bind(this);
	}

	render() {
		return(
			<div className={"ProjectCard row " + this.props.status.status + " " + this.isDueToday()}>

			<div className="col-sm-6 text-left">
			{this.props.name.name}
			</div>
			<div className="col-sm-3 text-center">
			{this.getDate()}
			</div>
			<div className="col-sm-3 text-right">
			{this.getStatus()}
			</div>
			</div>

			);

	}

	getDate() {
		let date = new Date(this.props.date.date);
		let today = new Date();
		if (date.setHours(0,0,0,0) == today.setHours(0,0,0,0)) date = "Today";
		else if (date.setHours(0,0,0,0) > today.setHours(0,0,0,0)) date = "Overdue";
		return date;
	}

	getStatus() {
		let i = this.props.status.status;
		let status = ['Ready','In Progress', 'IR', 'QA', 'Done'];
		return status[i];
	}

	isDueToday() {
		if(['Today', 'Overdue'].indexOf(this.getDate()) !== -1)
			return 'today';
		return '';

	}

}

class ProjectFilter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filter : 'All',
			projects : [],
			view_projects : []
		};

		this.toggleDropdown = this.toggleDropdown.bind(this);
		this.changeFilterToAll = this.changeFilterToAll.bind(this);
		this.changeFilterToDone = this.changeFilterToDone.bind(this);
		this.changeFilterToToday = this.changeFilterToToday.bind(this);
		this.filterByDone = this.filterByDone.bind(this);
		this.filterByToday = this.filterByToday.bind(this);



	}
	componentDidMount() {
		this.ProjectList();
	}
	ProjectList() {
		API.GETRequest('/api/Project', (response) => {
			this.setState({
				projects : response,
				view_projects : response
			});
		});
	}
	render() {
		const projects = Object.keys(this.state.view_projects).map((key, index) => {
			let name = this.state.view_projects[key].name;
			let date = this.state.view_projects[key].due_date;
			let status = this.state.view_projects[key].status;
			return <ProjectCard name={{name}} date={{date}} status={{status}}/>
		});

		return (
		<div className="container">
		<h1><span className="filter" onClick={this.toggleDropdown} ><span className="arrow down" ref="arrowDown">▼</span><span className="arrow up hidden" ref="arrowUp">▲</span> {this.state.filter}</span> Projects</h1>
		<ul className="dropdown hidden" ref="dropdown">
		<li onClick={this.changeFilterToAll}>All</li>
		<li onClick={this.changeFilterToToday}>Todays</li>
		<li onClick={this.changeFilterToDone}>Done</li></ul>
		<div className="row headers">
		<div className="col-sm-6">
		Project Name
		</div>
		<div className="col-sm-3 text-center">
		Due Date
		</div>
		<div className="col-sm-3 text-right">
		Status
		</div>
		</div>
		{ projects }
		</div>

		);
	}

	toggleDropdown() {	
		this.refs.dropdown.classList.toggle('hidden');
		this.refs.arrowDown.classList.toggle('hidden');
		this.refs.arrowUp.classList.toggle('hidden');

	}

	filterByDone(projects) {
		let projects_out = [];
		for (let i in projects) {
			if([4].indexOf(projects[i].status) !== -1)
				projects_out.push(projects[i]);
		}
		return projects_out;
	}
	filterByToday(projects) {
		let projects_out = [];
		for (let i in projects) {
			if([0,1,2,3].indexOf(projects[i].status) !== -1)
				projects_out.push(projects[i]);
		}
		return projects_out;
	}



	changeFilterToAll(event) {
		this.setState({
			filter: event.target.innerText,
			view_projects : this.state.projects
		});
		this.toggleDropdown();
	}
	changeFilterToToday(event) {
		let output = this.filterByToday(this.state.projects);
		this.setState({
			filter: event.target.innerText,
			view_projects : output
		});
		this.toggleDropdown();
	}
	changeFilterToDone(event) {
		let output = this.filterByDone(this.state.projects);
		this.setState({
			filter: event.target.innerText,
			view_projects : output
		});
		this.toggleDropdown();
	}
}

export {ProjectFilter, ProjectCard};