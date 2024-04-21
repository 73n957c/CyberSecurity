import {Container, Col, Row, Breadcrumb, Form, Dropdown} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../pages-css/TopicPage.css";

function TopicPage() {
  const [topicLikeCount, setTopicLikeCount] = useState(10);
  const [topicLiked, setTopicLiked] = useState(false);
  const [commentLikeCount, setCommentLikeCount] = useState(10);
  const [commentLiked, setCommentLiked] = useState(false);

  const handleTopicLikeClick = () => {
    setTopicLiked(!topicLiked);
    setTopicLikeCount(topicLiked ? topicLikeCount - 1 : topicLikeCount + 1);
  };

  const handleCommentLikeClick = () => {
    setCommentLiked(!commentLiked);
    setCommentLikeCount(commentLiked ? commentLikeCount - 1 : commentLikeCount + 1);
  };
  
  return (
    <>
    <div className="page-title">
    <h1>Community</h1>
    </div>
    <Container className="topic-container">
      <div className="topic-breadcrumb-search">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/community" }}>
            Community
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Discussion</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Row className="topic-post">
        <Col sm={4}>
          <div className="post-op">
            <img src="../../Resources/Clothing.png" alt="" />
            <div className="name-time">
              <p className="name">Seong Teng</p>
              <p className="time">30 min. ago</p>
            </div>
          </div>
        </Col>
        <Col sm={8}>
          <div className="post-content">
            <h3 className="post-title">
              Seeking Advice: How Can I Protect My Personal Devices from Cyber Attacks?
            </h3>
            <p className="post-text">
              Hi everyone, I've been increasingly concerned about the security of my personal devices, 
              especially with the rise in cyber threats. I want to ensure that my smartphone, laptop, 
              and other gadgets are adequately protected against potential attacks. What are some 
              practical tips and strategies you would recommend to enhance security? Are there 
              specific software tools or settings I should prioritize? I'm eager to learn from your 
              experiences and expertise in cybersecurity. Thank you in advance for your insights!
            </p>
            <div className="topic-stats">
              10 replies • {topicLikeCount}{" "}
              <i
                className={`bi bi-chevron-double-up like-btn ${topicLiked ? "liked" : ""}`}
                onClick={handleTopicLikeClick}
              ></i>
            </div>
            <Form.Label>
              <Form.Control type="test" placeholder="Comment here" />
            </Form.Label>
          </div>
        </Col>
      </Row>
      <Dropdown className="topic-comment-dropdown">
        <Dropdown.Toggle variant="success">Sort</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/latest">Latest</Dropdown.Item>
          <Dropdown.Item href="#/top">Top</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Row className="topic-comment">
        <Col sm={4}>
          <div className="post-op">
            <img src="../../Resources/Clothing1.png" alt="" />
            <div className="name-time">
              <p className="name">Zhi Yuan</p>
              <p className="time">20 min. ago</p>
            </div>
          </div>
        </Col>
        <Col sm={8}>
          <div className="post-content">
            <p className="post-text">
              Hi there! Protecting your personal devices from cyber attacks is definitely crucial in 
              today's digital landscape. Here are some tips and strategies that you can consider:
              <br></br>
              <br></br>
              1. Keep your software up to date: Ensure that your operating system, antivirus software, 
              and other applications are regularly updated with the latest security patches. This 
              helps to patch any vulnerabilities that attackers might exploit.
              <br></br>
              <br></br>
              2. Use strong, unique passwords: Avoid using easy-to-guess passwords and consider using 
              a password manager to generate and store complex passwords for your accounts. Additionally, 
              enable two-factor authentication whenever possible for an extra layer of security.
              <br></br>
              <br></br>
              3. Be cautious of phishing attempts: Be vigilant of suspicious emails, texts, or messages that 
              may be phishing attempts to steal your personal information. Avoid clicking on links or 
              downloading attachments from unknown sources.
              <br></br>
              <br></br>
              By implementing these practices, you can significantly reduce the risk of cyber attacks and 
              better protect your personal devices. Remember to stay informed about the latest cybersecurity 
              threats and best practices to stay one step ahead of potential attackers.
            </p>
            <div className="topic-stats">
              10 replies • {commentLikeCount}{" "}
              <i
                className={`bi bi-chevron-double-up like-btn ${commentLiked ? "liked" : ""}`}
                onClick={handleCommentLikeClick}
              ></i>
            </div>
            <Form.Label>
              <Form.Control type="test" placeholder="Comment here" />
            </Form.Label>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default TopicPage;
