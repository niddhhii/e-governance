import React from 'react';
import './login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
 const login = () => {
     
         return (
        <Form className="layout">
        
      <FormGroup>
        <Label>Governance Level</Label>
        <Input type="select" name="select">
          <option>Central</option>
          <option>State</option>
          <option>3</option>
          
        </Input>
      </FormGroup>
      <FormGroup>
        <Label> Email</Label>
        <Input type="email" name="email"  placeholder="xyz@gmail.com" />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" name="password"  placeholder="**********" />
      </FormGroup>
      <Button>Login</Button>
      </Form>
    );
     
    
}

export default login;