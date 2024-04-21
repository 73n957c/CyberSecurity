import "../components-css/IntroNews.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function NewsCarousel() {
  const topNewsList = [
    {
      id: 1,
      img: "../../Resources/news.jpg",
      title: "Quantum Leap: China Achieves Unhackable Communication",
      desc: "China's milestone achievement in quantum communication promises unassailable data security, leveraging the power of quantum mechanics to thwart hacking attempts.",
    },
    {
      id: 2,
      img: "../../Resources/news2.jpg",
      title: "AI Sentinel: Autonomous Cybersecurity Defends Networks",
      desc: "Cutting-edge AI systems now autonomously detect and respond to cyber threats, ushering in a new era of proactive defense in network security.",
    },
    {
      id: 3,
      img: "../../Resources/news3.png",
      title: "Blockchain Fortresses: Immutable Defense Against Cyber Attacks",
      desc: "Businesses are increasingly turning to blockchain technology to create unbreachable fortifications against cyber threats, leveraging its immutable ledger to safeguard sensitive data.",
    },
  ];
  return (
    <>
      <Carousel id="intro-news">
        {topNewsList.map((item) => {
          return (
            <Carousel.Item key={item.id} interval={5000}>
              <Link to="/newsinfo" className="carousel-link">
                <img className="carousel-img" src={item.img} />
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
export default NewsCarousel;
