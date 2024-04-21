import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../components-css/DailyVocab.css";

function DailyVocab() {
  const vocabList = [
    {
      id: 1,
      title: "Honeypot",
      desc: "A decoy system used to lure and monitor attackers, providing insights into their tactics and enhancing overall cybersecurity defenses.",
    },
    {
      id: 2,
      title: "Cryptographic Hash Function",
      desc: "A method to convert data into a fixed-size string of characters for data integrity, password hashing, and digital signatures.",
    },
    {
      id: 3,
      title: "Rootkit",
      desc: "Malicious software that grants unauthorized access to a computer or network while hiding from detection by modifying operating system components.",
    },
  ];

  return (
    <Carousel id="dailyVocabContainer">
        {vocabList.map((item) => {
          return (
            <Carousel.Item key={item.id} interval={5000}> 
              <Link to="/education" className="carousel-link">
                < div className="dailyVocabPlaceholder">
                  <h6>History</h6>
                  <h5>Daily Vocabulary</h5>
                </div>
                <Carousel.Caption>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          );
        })}
    </Carousel>
  )
}

export default DailyVocab;
