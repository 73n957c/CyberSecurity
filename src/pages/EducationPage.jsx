import "../pages-css/EducationPage.css"
import EnrollNewCourse from '../components/EnrollNewCourse';
import DailyVocab from '../components/DailyVocab';
import { Container, Col, Row } from "react-bootstrap";

function Education(){
    return(
        <>
            <div className="page-title">
                <h1>Education</h1>
            </div>
            <div id="education" className='education-overall'>
                <Container id="educationContainer">
                    <Row id="educationContainerBtm">
                        <Col sm={7}>
                            <EnrollNewCourse></EnrollNewCourse>
                        </Col>
                        <Col sm={5}>
                            <DailyVocab></DailyVocab>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Education;