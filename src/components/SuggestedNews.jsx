import "../components-css/SuggestedNews.css";
import { Link } from "react-router-dom";

function SuggestedNews() {
  const suggestedNewsList = [
    {
      id: 1,
      img: "../../Resources/news3.png",
      title: "Ransomware Resurgence: Cyber Extortion Reaches New Heights",
      desc: "Ransomware attacks surge as cybercriminals exploit vulnerabilities in remote work infrastructure, demanding exorbitant sums for the decryption of critical data, posing unprecedented challenges to organizations worldwide.",
    },
    {
      id: 2,
      img: "../../Resources/news.jpg",
      title: "5G Security Imperatives: Safeguarding Next-Gen Networks from Cyber Threats",
      desc: "As 5G technology proliferates, cybersecurity experts emphasize the urgency of implementing robust security measures to protect against emerging threats targeting the high-speed, low-latency networks powering the future of connectivity.",
    },
    {
      id: 3,
      img: "../../Resources/news2.jpg",
      title: "Biohacking Alert: Cybersecurity Risks in the Age of Connected Medical Devices",
      desc: "With the proliferation of IoT-enabled medical devices, concerns mount over potential cyber threats targeting healthcare infrastructure, highlighting the critical need for enhanced cybersecurity measures to safeguard patient data and ensure the integrity of medical systems.",
    },
  ];
  return (
    <>
      <div className="suggested-news-container">
        <h3>Suggested</h3>
        <div className="suggested-news-item-list">
          {suggestedNewsList.map((item) => {
            return (
              <Link to="/newsinfo" className="carousel-link" key={item.id}>
                <div className="suggested-news-item">
                  <img src={item.img} alt="" className="suggested-news-img" />
                  <div className="suggested-news-text">
                    <h6 className="news-title">{item.title}</h6>
                    <div className="desc-text">{item.desc}</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SuggestedNews;
