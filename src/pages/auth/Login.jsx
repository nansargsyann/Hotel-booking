import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {
return (
    <Container>
        <Row>
            <Col md={{span: 4, offset: 4}} className="mt-4">
                <div className='h3'>Welcome!</div>
                <p className='text-muted'>Lorem ipsum, dolor sit amet. Recusandae, assumenda.</p>
                <Form>
                <Form.Group className="mb-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"/>
                </Form.Group>

                <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
                </Form.Group>    
                <Button variant="primary" type="submit">
                Sign in
                </Button>
                <p className='mt-4'>
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

export default Login