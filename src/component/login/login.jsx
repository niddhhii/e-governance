import React from 'react';
import './login.css';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
class login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
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
			password: this.state.password
		};
		console.log(user)
		if (user) 
			fetch('http://localhost:5000/user/login', {
				method: 'POST',
				body: JSON.stringify(user),
				headers: {
				'Content-Type': 'application/json'
				},
			})
				.then(res => res.json())
				.then(data => console.log(data));
		
	}
	render() {
		return (
			<div className="layout">
				<h1>LOGIN</h1>
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
					<Button color="primary" onClick={this.onsubmit}>LOGIN</Button>
				</Form>
			</div>
		);
	}
}

export default login;
