import {Container, Row} from "react-bootstrap";
import "../components-css/IntroPrevention.css";

function HomePreventon(){
    const prevention = [
        {
            id: 1,
            img: "../Resources/prevent2.jpg",
            title: "Regular Software Updates and Patch Management",
            desc: "Ensure that all software, operating systems, and applications are regularly updated with the latest security patches to address vulnerabilities and weaknesses.",
        }, 
        {
            id: 2,
            img: "../Resources/prevent3.jpg",
            title: "Network Security Measures",
            desc: "Implement firewalls, intrusion detection systems (IDS), and intrusion prevention systems (IPS) to monitor and control network traffic, detect malicious activity, and block unauthorized access.",
        }, 
        {
            id: 3,
            img: "../Resources/prevent4.jpg",
            title: "Secure Configuration Management",
            desc: "Configure systems and devices securely by disabling unnecessary services, closing unused ports, and applying security settings according to industry best practices and vendor recommendations.",
        }, 
        {
            id: 4,
            img: "../Resources/prevent1.jpg",
            title: "Vendor and Supply Chain Security",
            desc: "Assess the security posture of third-party vendors and suppliers and establish security requirements in contracts. Monitor and manage the security risks posed by the supply chain.",
        },
    ]

    return(
        <>
        <Container className="introprevention">
            <div className="home-prevention-header">
                <h4>Cyber Insecurity <span>Preventions</span>:</h4>
            </div>
            <div id="home-prevention">
                {prevention.map((item) => (
                    <div to="#" className="carousel-link" key={item.id}>
                        <div className="prevention-item">
                            <img src={item.img} alt="" className="prevention-img" />
                            <div className="prevention-text">
                                <h6 className="prevention-title">{item.title}</h6>
                                <div className="prevention-desc">{item.desc}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
        </>
    )
}

export default HomePreventon;