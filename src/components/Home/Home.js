import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../images/Promo-Facebook-Facebook image post (1).jpeg"
import banner2 from "../../images/Promo-Facebook-Facebook image post (2).jpeg"
import banner3 from "../../images/Promo-Facebook-Facebook image post.jpeg"

import Services from '../Services/Services';
import Branches from './Branches';

import Mission from './Mission';


const Home = () => {



    return (
        <div>
            <div >
                <Carousel className="carousel">
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 "
                            height="450px"
                            width="500px"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Equipped with latest equipment</h3>
                            <p>Enjoy the best gym in the town</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            height="450px"

                            src={banner2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Latest Rope Exercise</h3>
                            <p>Build your muscle.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            height="450px"
                            src={banner3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Ladies zone</h3>
                            <p>You can workout privately.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <Services></Services>
            </div>
            <div>
                <Mission></Mission>
            </div>
            <Branches></Branches>

        </div>
    );
};

export default Home;