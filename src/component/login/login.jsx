import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
const login = () => {
	return (
		<div className="layout">
			<h1>LOGIN</h1><hr/><br/>
			<Form>
				<FormGroup>
					<Label><h5>Email</h5></Label>
					<Input type="email" name="email" placeholder="xyz@gmail.com" /><br/>
				</FormGroup>
				<FormGroup>
					<Label><h5>Password</h5></Label>
					<Input type="password" name="password" placeholder="**********" />
				</FormGroup>
				<Link to="/department"><br/>
					<Button>LOGIN</Button>
				</Link>
			</Form>
		</div>
	);
};

export default login;
