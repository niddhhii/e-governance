import React from 'react';
import './department.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

const department = () => {
    return (
        <div>
            <h2 className="dept">Departments</h2>
            <Container>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle>
                                <img src={'health.png'}/>
                                <h2>National Health Department</h2>
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle>
                                <img src={'edu.png'}/>
                                <h2>National Education Department</h2>
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        {/*<Card.Img src="images/finance.png" />*/}
                        <CardBody style={{backgroundImage: 'url(${Background})'}}>
                            <CardTitle>
                                {/*<CardImg src="images/finance.png"/>*/}
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
                                    <img src={'defence.png'}/>
                                    <h2>National Defence Department</h2>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    <img src={'energy.png'}/>
                                    <h2>National Energy Department</h2>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    <img src={'food.png'}/>
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
export default  department;