import React from 'react';

import JumbotronHeading from '../jumbotron/Jumbotron';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
        <JumbotronHeading />
        <Container>
            <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
            </Row>
        </Container>
        </div>
    );
}

export default Home;