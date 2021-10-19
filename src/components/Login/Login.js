import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import "./Login.css"


const element = <FontAwesomeIcon icon={faGoogle} />



const Login = () => {
    const { googleLogin, existingUser, error, emailInput, passInput } = useAuth();

    return (
        <div className='container '>

            <div className='loginPage'>
                <img
                    alt=""
                    src="./dumbell.png"
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                />
                <h1>Welcome to Fitness Gym</h1>



                <Form>


                    <Col >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={emailInput} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                <p>{error}</p>
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>








                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={passInput} type="password" placeholder="Password" />
                        </Form.Group>




                        <Button onClick={existingUser} className='loginButton' variant="primary" type="button">
                            Login
                        </Button>
                        <p>or</p>
                        <Button onClick={googleLogin} className='googleLogin' variant="primary" type='button' >
                            {element}   continue with google
                        </Button>


                        <p>Not on fitness gym yet?<Link className='signUpLink' to='/register'>Sign up</Link></p>


                    </Col>



                </Form>



            </div>

        </div>


    );
};

export default Login;