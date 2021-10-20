import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './servicedetails.css'

const ServiceDetails = () => {
    let { id } = useParams();
    const [detailsService, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({});

    useEffect(() => {
        fetch("/singleService.json")
            .then(res => res.json())
            .then(data => setServiceDetails(data.service))

    }, [])
    useEffect(() => {
        const singleServiceFound = detailsService.find((sr) => sr?.id == id);
        setSingleService(singleServiceFound);
        console.log(setSingleService)

    }, [detailsService])
    return (

        <div>


            <Container className="mb-5 service-details">
                <h2 className="text-center my-5">Popular Theray of Number: <strong className="text-primary">{id}</strong></h2>
                <Row>
                    <Col md={4}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src={singleService?.image} className="service-image" />
                        </Card>
                    </Col>
                    <Col md={5}>
                        <Card>
                            <Card.Body>
                                <Card.Title> <b>{singleService?.name}</b> </Card.Title>
                                <Card.Text>
                                    <p>{singleService?.description}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetails;