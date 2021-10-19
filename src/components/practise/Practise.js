import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Practise = () => {
    const { googleLogin, existingUser, error } = useAuth();
    return (
        <div className='container'>
            <Form>


                <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            <p>{error}</p>
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>








                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>



                    <Button onClick={existingUser} className='loginButton' variant="primary" type="button">
                        Login
                    </Button>
                    <p>or</p>
                    <Button onClick={googleLogin} className='googleLogin' variant="primary" type='button' >
                        continue with google
                    </Button>


                    <p>Not on fitness gym yet?<Link className='signUpLink' to='/register'>Sign up</Link></p>


                </Col>



            </Form>


        </div>
    );
};

export default Practise;