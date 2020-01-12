import React from 'react';

import JumbotronHeading from '../jumbotron/Jumbotron';
import { Container, Row, Col } from 'react-bootstrap';
import Apply from '../apply/Apply';
import Signin from '../signIn/Signin';
import Ordinance from '../ordinance/Ordinance';
import Prevent from '../prevent/Prevent';

const Home = () => {
    return (
        <div>
            <JumbotronHeading />
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6}><Apply /></Col>
                    <Col sm={12} md={6} lg={6}><Signin /></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6}><Ordinance /></Col>
                    <Col sm={12} md={6} lg={6}><Prevent /></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;