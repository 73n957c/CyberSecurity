import {Container, Row} from "react-bootstrap";
import "../components-css/IntroFactor.css";

function HomeFactor(){
    const factor = [
        {
            id: 1,
            img: "../Resources/factor1.jpg",
            title: "Poorly Secured Networks and Infrastructure",
            desc: "Insecure Wi-Fi networks, unpatched systems, and inadequate network segmentation can provide entry points for attackers to infiltrate and move laterally within a network.",
        }, 
        {
            id: 2,
            img: "../Resources/factor2.jpg",
            title: "Vulnerabilities in Software and Hardware",
            desc: "Flaws or weaknesses in software programs, operating systems, and hardware devices can be exploited by attackers to gain unauthorized access or disrupt services.",
        }, 
        {
            id: 3,
            img: "../Resources/factor3.jpg",
            title: "Outdated or Inadequate Security Measures",
            desc: "Failure to update software, use strong passwords, implement firewalls, or deploy antivirus software can leave systems vulnerable to exploitation.",
        }, 
        {
            id: 4,
            img: "../Resources/prevent1.jpg",
            title: "Sophisticated Cyber Attacks",
            desc: "Increasingly advanced and persistent threats, such as nation-state-sponsored attacks, ransomware, and zero-day exploits, pose significant challenges to cybersecurity defenses.",
        },
    ];

    return(
        <>
        <Container className="introfactor">
            <div className="home-factor-header">
                <h4>Cyber Insecurity <span>Factors</span>:</h4>
            </div>
            <div id="home-factor">
                {factor.map((item) => (
                    <div to="#" className="carousel-link" key={item.id}>
                        <div className="factor-item">
                            <img src={item.img} alt="" className="factor-img" />
                            <div className="factor-text">
                                <h6 className="factor-title">{item.title}</h6>
                                <div className="factor-desc">{item.desc}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </Container>
        </>
    )
}

export default HomeFactor;