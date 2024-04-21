import Container from 'react-bootstrap/Container';
import "../components-css/EnrollNewCourse.css"
import { Link } from "react-router-dom";

function EnrollNewCourse() {
    const newCourseList = [
        {
          id: 1,
          img: "../../Resources/course1.jpg",
          title: "Cybersecurity Fundamentals",
          desc: "This course covers the basics of cybersecurity, including threat landscape, cryptography, network security, and security policies. It provides a solid foundation for understanding key concepts and practices in the field.",
          label1: "Beginner",
          view: "12123",
        },
        {
          id: 2,
          img: "../../Resources/course3.jpg",
          title: "Ethical Hacking and Penetration Testing",
          desc: "This course focuses on ethical hacking techniques and penetration testing methodologies. Participants learn how to identify vulnerabilities, exploit security weaknesses, and secure systems against cyber threats.",
          label2: "Professional Certificate",
          view: "45363",
        },
        {
          id: 3,
          img: "../../Resources/course2.jpeg",
          title: "Security Operations and Incident Response",
          desc: "This course delves into security operations and incident response strategies, teaching participants how to detect, respond to, and recover from security incidents effectively. Topics include incident detection, analysis, containment, and recovery.",
          label1: "Beginner",
          label2: "Professional Certificate",
          view: "121",
        },
      ];
    
    return (
        <Container id="enrollNewCourse">
            <div className="header-wrapper">
                <h3>Enroll in New Course:</h3>
            </div>
            <div id="courseContainer">
                {newCourseList.map((item) => (
                    <Link to="#" className="carousel-link" key={item.id}>
                        <div className="course-item">
                            <img src={item.img} alt="" className="course-img" />
                            <div className="course-text">
                                <h6 className="course-title">{item.title}</h6>
                                <div className="desc-text">{item.desc}</div>
                                <div className="course-label1">{item.label1}</div>
                                <div className="course-label2">{item.label2}</div>
                                <div className="course-view">{item.view}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Container>
    );
}

export default EnrollNewCourse;
