import { Container, Col, Row, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../components-css/NavBottom.css";

function NavBottom(){
    return(
        <>
        <section className='nav-bottom'>
        <Container fluid>
          <Row>
            <Col xm={3} className='nav-bottom-left'>
              <div className='nav-bottom-font'>
                <Link to="/aboutus" className="nav-bottom-about">
                    <h2><span>About Us</span></h2>
                </Link>
                <Link to="/education" className="nav-bottom-features">
                    <h4>Education</h4>
                </Link>
                <Link to="/community" className="nav-bottom-features">
                    <h4>Community</h4>
                </Link>
                <Link to="/newsinfo" className="nav-bottom-features">
                    <h4>News/Info</h4>
                </Link>
              </div>
            </Col>
            <Col xm={4} className='nav-bottom-center'>
              <div>
                <img className='nav-bottom-img' src='../Resources/introabout.png'/>
              </div>
              <h2><span>CYBER</span>5H13LD</h2>
            </Col>
            <Col xm={3} className='nav-bottom-right'>
              <div className='nav-bottom-font'>
                <h2><span>Contacts</span></h2>
                <h5>Tel: 604-5756090<br></br>
                    Fax: 604-5757389</h5>
                <h5>Web: &nbsp;
                <Link to="https://main--cyber5h13ld.netlify.app/" className="website-publish">
                    https://main--cyber5h13ld.netlify.app/
                </Link>
                </h5>
                <h5>Email: admin_cyber5h13ld@gamil.com</h5>
              </div>
            </Col>
          </Row>
        </Container>
        <p className="author"><span>© 2024 CYBER5H13LD. All Rights Reserved</span><br></br>Author: Cheah Seong Teng</p>
        </section>
        </>
    )
}

export default NavBottom;