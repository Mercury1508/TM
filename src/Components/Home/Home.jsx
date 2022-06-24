import React from "react";
import './Home.css'
import Navbar from '../navbar/navbar.jsx'
import homeImg from '../../public/images/vsdsdv.jpg'
import {Container,Row,Col} from 'react-bootstrap'

function Home(){
    return (
        <div>
            <div className="homeInner">
                <Navbar />
                <Container>
                    <Row>
                        <Col className="homeCol" sm={6}>
                            <h1 className="homeHeading">Teamwork makes the Dreamwork</h1>
                            <p className="homeDescription">Find your perfect teammates with similar interests and work together to achieve your goals.</p>
                            <button className="links linkSign"><span class="front">Sign In</span></button>
                            <button className="links linkRegister"><span class="front">Register</span></button>
                        </Col>
                        <Col className="homeCol" sm={6}>
                            <img src={homeImg} alt="homeImage" className="homeImg"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Home