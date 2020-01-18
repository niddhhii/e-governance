import React from 'react';
import './department.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';

const department = () => {
    return (
        <div>
            <center><h2>Departments</h2></center>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    <h2>National Health Department</h2>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    <h2>National Education Department</h2>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    <h2>National Finance Department</h2>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    <h2>National Defence Department</h2>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    <h2>National Energy Department</h2>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    <h2>National Food Department</h2>
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