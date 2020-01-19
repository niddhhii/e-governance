import React from 'react';
import './department.css';
import { Card, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';
const department = props => {
	return (
		<div
			onClick={() =>
				props.history.push({
					pathname: '/schemes',
					state: { DeptID: props.deptid,
					},
				})
			}
		>
			<Container>
				<Row>
					<Col>
						<Card style={{ backgroundColor: '#f19066' }}>
							<CardBody>
								<CardTitle>
									<h2>
										<center>{props.name}</center>
									</h2>
								</CardTitle>
							</CardBody>
						</Card>
					</Col>
					{/*
					<Col>
						<Card style={{ backgroundColor: '#778beb' }}>
							<CardBody>
								<CardTitle>
									<h2>
										<center>National Education Department</center>
									</h2>
								</CardTitle>
							</CardBody>
						</Card>
					</Col>
					<Col>
						<Card style={{ backgroundColor: '#f5cd79' }}>
							<CardBody>
								<CardTitle>
									<h2>
										<center>National Finance Department</center>
									</h2>
								</CardTitle>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col>
						<Card style={{ backgroundColor: '#ea8685' }}>
							<CardBody>
								<CardTitle>
									<h2>
										<center>National Defence Department</center>
									</h2>
								</CardTitle>
							</CardBody>
						</Card>
					</Col>
					<Col>
						<Card style={{ backgroundColor: '#e77f67' }}>
							<CardBody>
								<CardTitle>
									<h2>
										<center>National Energy Department</center>
									</h2>
								</CardTitle>
							</CardBody>
						</Card>
					</Col>
					<Col>
						<Card style={{ backgroundColor: '#786fa6' }}>
							<CardBody>
								<CardTitle>
									<h2>
										<center>National Food Department</center>{' '}
									</h2>
								</CardTitle>
							</CardBody>
						</Card>
					</Col>*/}
				</Row>
			</Container>
		</div>
	);
};
export default withRouter(department);
