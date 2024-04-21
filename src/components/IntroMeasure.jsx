import { Carousel } from "react-bootstrap";
import "../components-css/IntroMeasure.css";

function DailyNotify() {
  const notify = [
    {
      id: 1,
      desc: "Your best defense against cyber threats starts with proactive measures",
    },
    {
      id: 2,
      desc: "Safeguard your digital life with cybersecurity habits and awareness.",
    },
    {
      id: 3,
      desc: "Cybersecurity isn't just about reacting to threats; it's about preventing them altogether.",
    },
  ];

  return (
    <Carousel id="dailynotify-container">
        {notify.map((item) => {
          return (
            <Carousel.Item key={item.id} interval={5000}> 
            <div className="carousel-link">
                <div className="dailynotify-placeholder">
                    <h5>Daily Quote</h5>
                </div>
                <Carousel.Caption>
                  <h3>{item.desc}</h3>
                </Carousel.Caption>
            </div>
            </Carousel.Item>
          );
        })}
    </Carousel>
  )
}

export default DailyNotify;
