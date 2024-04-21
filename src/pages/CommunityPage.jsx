import Nav from "react-bootstrap/Nav";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import CommunityTrending from "../components/CommunityTrending";
import CommunityArchived from "../components/CommunityArchived";
import CommunitySuggestion from "../components/CommunitySuggestion";
import { Container, Col, Row, Form } from "react-bootstrap";
import "../pages-css/CommunityPage.css";

function Community() {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  return (
    <>
      <div className="page-title">
        <h1>Community</h1>
      </div>
      <Container id="community">
        <Nav className="horizontal-nav" role="navigation">
          <ul>
            <li>
              <Nav.Link
                href="#all"
                style={{
                  textDecoration: activeMenuItem === 0 ? "underline" : "none",
                  color: activeMenuItem === 0 ? "#FFA800" : "white",
                }}
                onClick={() => handleMenuItemClick(0)}
              >
                All
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                href="#general"
                style={{
                  textDecoration: activeMenuItem === 1 ? "underline" : "none",
                  color: activeMenuItem === 1 ? "#FFA800" : "white",
                }}
                onClick={() => handleMenuItemClick(1)}
              >
                General
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                href="#securityissues"
                style={{
                  textDecoration: activeMenuItem === 2 ? "underline" : "none",
                  color: activeMenuItem === 2 ? "#FFA800" : "white",
                }}
                onClick={() => handleMenuItemClick(2)}
              >
                Security Issues
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                href="#rating"
                style={{
                  textDecoration: activeMenuItem === 3 ? "underline" : "none",
                  color: activeMenuItem === 3 ? "#FFA800" : "white",
                }}
                onClick={() => handleMenuItemClick(3)}
              >
                Rating
              </Nav.Link>
            </li>
          </ul>
          <div id="communitySearch">
            <Form.Label>
              <Form.Control type="search" placeholder="Search" />
            </Form.Label>
            <Button>NEW TOPIC</Button>
          </div>
        </Nav>

        <Row id="communityComponent">
          <Col sm={6} id="communityComponentTop">
            <CommunityTrending></CommunityTrending>
          </Col>
          <Col sm={5}>
            <CommunityArchived></CommunityArchived>
          </Col>
        </Row>
        <div id="communityComponenBtm">
          <CommunitySuggestion></CommunitySuggestion>
        </div>
      </Container>
    </>
  );
}

export default Community;
