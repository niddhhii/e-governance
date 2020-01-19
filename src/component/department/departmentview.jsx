import React, { Component } from 'react';
import Department from './department';

class departmentview extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             list:[]
        }
    }
    

	componentDidMount() {
		fetch('http://localhost:5000/department/',{
            method:'GET'
        })
			.then(res => res.json())
			.then(data => { this.setState({list:[...this.state.list,...data.message]}); 
                console.log(this.state.list.map(val=>val))});
	}

	render() {
        return(
            <div>
            <br />
			<center>
				<h2>DEPARTMENTS</h2>
			</center> 
            {this.state.list.map((val,index) =>(
                <Department key={val.DeptID} name={val.name} deptid={val.DeptID} />
            ))}
            </div>
        );
        
	}
}
export default departmentview;
