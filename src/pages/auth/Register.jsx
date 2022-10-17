import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Register = () => {
return (
    <Container>
        <Row>
            <Col md={{span: 4, offset: 4}} className="mt-2">
                <div className='h3'>Create account</div>
                <p className='text-muted'>Lorem ipsum, dolor sit amet consectetur.</p>
                <Form>
                <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                    <Form.Control/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email</Form.Label>
                <Form.Control type="email"/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
                </Form.Group>    
                <Button variant="primary" type="submit">
                Sign up
                </Button>
                <p className='mt-3'>
                    <small className='text-muted'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, esse.
                    </small>
                </p>
            </Form>
            </Col>
            
        </Row>
    </Container>
    );
}

export default Register