import React from 'react';

import { Jumbotron, Container } from 'react-bootstrap';

import './Jumbotron.css'

const JumbotronHeading = () => {
    return (
        <Jumbotron className="jumboPic mt-5 mb-5 text-white">
            <Container className="pt-5 pb-5">
                <h1>Mesquite Alarm Permit Program</h1>
            </Container>
        </Jumbotron>
    );
}

export default JumbotronHeading;
