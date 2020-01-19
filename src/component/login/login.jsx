import React from 'react';
import './login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import  { UserProvider } from '../../UserContext';
import Department from '../department/departmentview';
import { Redirect } from 'react-router-dom';

class login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			token: null,
			type: null,
			isvalid: false,
		};
	
		this.onChange = this.onChange.bind(this);
		this.onsubmit = this.onsubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	onsubmit(e) {
		e.preventDefault();

		const user = {
			email: this.state.email,
			password: this.state.password,
		};
		if (user)
			fetch('http://localhost:5000/user/login', {
				method: 'POST',
				body: JSON.stringify(user),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then(res => res.json())
				.then(data => {
					console.log(data);
					if (data.Token) {
						this.setState({
							token: data.Token,
							type: data.type,
							isvalid: true,
						});

					}
				});

		};


	
	render() {
		if (this.state.isvalid && this.state.type === 'Central') {
			return (<Department />);
		} else if (this.state.isvalid && this.state.type === 'State') {
			return (<Redirect to="/state_dept" />);
		} else {
		//	return <Alert color="info">Incorrect login details</Alert>;
		
		return (
			<div className="layout">
				<h1 style={{ textAlign: 'center', color: 'lavender', fontFamily: 'cursive' }}>LOGIN</h1>
				<hr />
				<br />
				<Form>
					<FormGroup>
						<Label>
							<h5>Email</h5>
						</Label>
						<Input
							type="email"
							name="email"
							placeholder="xyz@gmail.com"
							value={this.state.email}
							onChange={this.onChange}
						/>
						<br />
					</FormGroup>
					<FormGroup>
						<Label>
							<h5>Password</h5>
						</Label>
						<Input
							type="password"
							name="password"
							placeholder="**********"
							value={this.state.password}
							onChange={this.onChange}
						/>
					</FormGroup>
					<br />
					<Button color="info" onClick={this.onsubmit}>
						<h5 style={{color:'#546de5'}}>LOGIN</h5>
					</Button>
				</Form>
			</div>

		);
		}
	}
}

export default login;
