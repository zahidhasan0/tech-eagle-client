import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Courses = () => {
    return (
        <Container>
                <Row>
                    <Col lg='3' className=' border'>
                       <h4>Left side nav</h4>
                    </Col>
                    <Col lg='9' className='border'>
                        <h3>This is course container</h3>
                    </Col>
                    
                </Row>
            </Container>
    );
};

export default Courses;