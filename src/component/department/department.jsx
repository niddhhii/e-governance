import React from 'react';
import './department.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';

const department = () => {
    return (
        <div><br/>
            <center><h2>DEPARTMENTS</h2></center>
            <Container>
                <Row>
                    <Col>
                        <Card style={{backgroundColor: '#f19066'}}>
                            <CardBody>
                                <CardTitle>
                                    <h2><center>National Health Department</center></h2>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{backgroundColor: '#778beb'}}>
                            <CardBody>
                                <CardTitle>
                                    <h2><center>National Education Department</center></h2>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{backgroundColor: '#f5cd79'}}>
                            <CardBody>
                                <CardTitle>
                                    <h2><center>National Finance Department</center></h2>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{backgroundColor: '#ea8685'}}>
                            <CardBody>
                                <CardTitle>
                                    <h2><center>National Defence Department</center></h2>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{backgroundColor: '#e77f67'}}>
                            <CardBody>
                                <CardTitle>
                                    <h2><center>National Energy Department</center></h2>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{backgroundColor: '#786fa6'}}>
                            <CardBody>
                                <CardTitle>
                                    <h2><center>National Food Department</center>   </h2>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default department;