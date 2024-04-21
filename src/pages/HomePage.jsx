import { Container, Col, Row, Nav} from "react-bootstrap";
import { useRef } from "react";
import React, { useState } from "react";
import IntroFactor from "../components/IntroFactor";
import IntroPrevention from "../components/IntroPrevention";
import IntroMeasure from "../components/IntroMeasure";
import IntroNews from "../components/IntroNews"
import "../pages-css/HomePage.css";

function Home(){
    return(
        <>
        <div className="page-title">
            <h5>Welcome to</h5>
            <h3>
            <span style={{ color: "#FFA800" }}>CYBER</span>5H13LD
            </h3>
        </div>
        <Container className="home">
            <Row className="home-intro">
                <h6>Welcome to CYBER5H13LD, your <span>ultimate destination</span> for all things 
                    <span> cybersecurity</span>. At CYBER5H13LD, we're dedicated to providing you with the latest 
                    insights, tools, and resources to safeguard your digital world. Whether you're a 
                    cybersecurity professional, a business owner, or simply concerned about your online security, 
                    our platform offers expert advice, informative articles, and cutting-edge solutions to protect 
                    against cyber threats. Join us in the fight against cybercrime and fortify your defenses with CYBER5H13LD.</h6>
            </Row>
            <Row className="home-intro">
                <h3>What is <span>Cybersecurity</span>?</h3>
                <h6>Cybersecurity refers to the practice of protecting <span>computer systems, networks,</span> and <span>data </span> 
                    from <span>unauthorized access, theft, damage, </span>or other <span>cyber threats</span>. It encompasses a range 
                    of technologies, processes, and practices designed to safeguard digital information and ensure the <span>
                    confidentiality, integrity, </span>and <span>availability of data</span>. Cybersecurity measures include implementing 
                    security controls, such as <span >firewalls, encryption, </span>and <span>access controls</span>, as well as monitoring 
                    and responding to security incidents to mitigate potential risks and vulnerabilities. The goal of 
                    cybersecurity is to <span>create a secure computing environment</span> that allows individuals, 
                    organizations, and governments to safely use and interact with digital technologies.
                </h6>
            </Row>
            <Row className="home-intro-breakdown">
                <Col sm={8}>
                    <Row className="home-intro-factor">
                        <IntroFactor></IntroFactor>
                    </Row>
                    <Row className="home-intro-prevention">
                        <IntroPrevention></IntroPrevention>
                    </Row>
                </Col>
                <Col sm={4}>
                    <Row className="home-intro-measure">
                        <IntroMeasure></IntroMeasure>
                    </Row>
                    <Row className="home-intro-news">
                        <IntroNews></IntroNews>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Home;