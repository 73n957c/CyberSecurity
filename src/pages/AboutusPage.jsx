import { Container, Col, Row, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import '../pages-css/AboutusPage.css'

export default function AboutPage() {
  return (
    <>
      <section className='about-section'>
        <Container fluid>
          <Row>
            <Col xm={6} className='title-container'>
              <div className='intro-font'>
                <h5>Who are we?</h5>
              </div>
              <div className='intro-font'>
                <h1><span>CYBER</span>5H13LD</h1>
              </div>
              <div className='intro-font'>
                <h4>Your <span>Trusted Guardian</span> in the <span>Digital Realm</span></h4>
              </div>
            </Col>
            <Col xm={4}>
              <div className='img-container'>
                <img src='../Resources/introabout.png'/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='about-section education'>
        <Container fluid>
          <Row>
              <Col xm={6} className='title-container'>
                <div className='intro-font'>
                  <h5><span>CYBER</span>5H13LD</h5>
                </div>
                <div className='intro-font'>
                  <h1>Education</h1>
                </div>
                <div className='intro-font'>
                  <h4>Education is the foundation of cybersecurity. By making learning interactive and engaging, we empower everyone to become their own digital defenders.</h4>
                </div>
                <div className='button-container'>
                  <Link to="/education">
                    <Button variant="view-more">
                      VIEW MORE <i className="bi bi-chevron-right"></i>
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col xm={4}>
                <div className='img-container'>
                  <img src='../Resources/aboutEducation.png'/>
                </div>
              </Col>
            </Row>
        </Container>
      </section>

      <section className='about-section community'>
        <Container fluid>
          <Row>
              <Col xm={6} className='title-container'>
                <div className='intro-font'>
                  <h5><span>CYBER</span>5H13LD</h5>
                </div>
                <div className='intro-font'>
                  <h1>Community</h1>
                </div>
                <div className='intro-font'>
                  <h4>We foster a community of cybersecurity enthusiasts. Join the conversation, share insights, and together, we'll build a safer digital world.</h4>
                </div>
                <div className='button-container'>
                  <Link to="/community">
                    <Button variant="view-more">
                      VIEW MORE <i className="bi bi-chevron-right"></i>
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col xm={4}>
                <div className='img-container'>
                  <img src='../Resources/aboutCommunity.png'/>
                </div>
              </Col>
            </Row>
        </Container>
      </section>

      <section className='about-section newsinfo'>
        <Container fluid>
            <Row>
              <Col xm={6} className='title-container'>
                <div className='intro-font'>
                  <h5><span>CYBER</span>5H13LD</h5>
                </div>
                <div className='intro-font'>
                  <h1>News and Information</h1>
                </div>
                <div className='intro-font'>
                  <h4>We keep you informed and up-to-date on the latest cyber threats and trends. Knowledge is power, and we're here to empower you with the information you need to stay safe online.</h4>
                </div>
                <div className='button-container'>
                  <Link to="/newsinfo">
                    <Button variant="view-more">
                      VIEW MORE <i className="bi bi-chevron-right"></i>
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col xm={4}>
                <div className='img-container'>
                  <img src='../Resources/aboutNews.png'/>
                </div>
              </Col>
            </Row>
          </Container>
      </section>

      <section className='about-section general'>
        <Container fluid>
          <Row>
            <Col xm={6} className='title-container'>
              <div className='intro-font'>
                <h5><span>CYBER</span>5H13LD</h5>
              </div>
              <div className='intro-font'>
                <h1>General</h1>
              </div>
              <div className='intro-font'>
                <ul>
                  <li><h5>Education and guidance without confusion to various features offered</h5></li>
                  <li><h5>Daily news and daily quotes</h5></li>
                  <li><h5>Monthly goal guidance (coming soon)</h5></li>
                  <li><h5>Cybersecurity Challenges (coming soon)</h5></li>
                </ul>
              </div>
            </Col>
            <Col xm={4}>
              <div className='img-container'>
                <img src='../Resources/aboutGeneral.png'/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
