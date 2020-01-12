import React from 'react';

import JumbotronHeading from '../jumbotron/Jumbotron';
import { Container, Row, Col } from 'react-bootstrap';
import Apply from '../apply/Apply';
import Signin from '../signIn/Signin';

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
        </div>
    );
}

export default Home;