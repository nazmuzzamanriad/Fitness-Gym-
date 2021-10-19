import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    console.log(props)
    const { id, name, image, description } = props.service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body className="card-body">
                        <Card.Title><h3>{name}</h3>
                        </Card.Title>
                        <Card.Text >
                            <p>{description.slice(0, 250)}</p>
                            <Link to={`/serviceDetails/${id}`}>
                                <button>
                                    More details
                                </button>
                            </Link>



                        </Card.Text>

                    </Card.Body>
                </Card>
            </Col>





        </div>
    );
};

export default Service;