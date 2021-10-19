import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import banner1 from "./../../../images/Build-a-Team-to-Create.jpg"
import banner2 from "./../../../images/Promo-Facebook-Facebook image post (1).jpeg"
import banner3 from "./../../../images/Promo-Facebook-Facebook image post (2).jpeg"
import banner4 from "./../../../images/young+woman+yoga+leg+and+arm+stretch+in+Beaconsfield.jpeg"
import banner5 from "./../../../images/Spinning+Studio+West+Island+Gym.jpeg"
import banner6 from "./../../../images/personal+training+klub20+west+island+gym.jpeg"

import './Gallery.css'


const Gallery = () => {
    return (
        <div className='container'>

            <Container>

                <Row className='firstRow'>
                    <Col>  <img src={banner1} alt="" srcset="" width='250px' height="250px" /></Col>
                    <Col><img src={banner2} alt="" srcset="" width='250px' height="250px" /></Col>
                    <Col><img src={banner3} alt="" srcset="" width='250px' height="250px" /></Col>
                    <Col><img src={banner3} alt="" srcset="" width='250px' height="250px" /></Col>
                </Row>
                <Row>
                    <Col>  <img src={banner4} alt="" srcset="" width='250px' height="250px" /></Col>
                    <Col><img src={banner5} alt="" srcset="" width='250px' height="250px" /></Col>
                    <Col><img src={banner6} alt="" srcset="" width='250px' height="250px" /></Col>
                    <Col><img src={banner3} alt="" srcset="" width='250px' height="250px" /></Col>

                </Row>
            </Container>

        </div>
    );
};

export default Gallery;