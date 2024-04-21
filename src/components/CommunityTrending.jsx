import "../components-css/CommunityTrending.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function CommunityTrending() {
  const [trendingTopicList, setTrendingTopicList] = useState([
    {
      id: 1,
      img: "../../Resources/Profile1.png",
      title: "Supply Chain Vulnerabilities: The Achilles' Heel of Cybersecurity",
      desc: "Recent high-profile supply chain attacks underscore the critical need for organizations to assess and mitigate risks posed by third-party vendors and dependencies, highlighting the importance of robust supply chain security measures.",
      reply: 10,
      like: 10,
      liked: false,
    },
    {
      id: 2,
      img: "../../Resources/Profile2.png",
      title: "Phishing Frenzy: Combatting the Ever-Evolving Threat Landscape",
      desc: "Phishing attacks continue to plague users and organizations alike, with cybercriminals employing increasingly sophisticated tactics to deceive users and steal sensitive information, prompting the need for enhanced user awareness and proactive defense strategies.",
      reply: 10,
      like: 10,
      liked: false,
    },
    {
      id: 3,
      img: "../../Resources/Profile3.png",
      title: "IoT Insecurity: Bridging the Gaps in Connected Device Protection",
      desc: "The proliferation of Internet of Things (IoT) devices introduces new avenues for cyber attacks, as insecure IoT ecosystems become prime targets for exploitation, emphasizing the urgency of implementing stringent security measures to safeguard connected devices and networks.",
      reply: 10,
      like: 10,
      liked: false,
    },
  ]);

  const handleLikeClick = (id) => {
    setTrendingTopicList((prevList) =>
      prevList.map((item) =>
        item.id === id
          ? {
              ...item,
              like: item.liked ? item.like - 1 : item.like + 1,
              liked: !item.liked,
            }
          : item
      )
    );
  };
  return (
    <>
      <div className="community-trending-container">
        <h3>Trending</h3>
        <div className="trending-topic-list">
          {trendingTopicList.map((item) => {
            return (
              <Link to="/community/topic1" key={item.id}>
                <div className="trending-item">
                  <img
                    src={item.img}
                    alt=""
                    className="community-profile-pic"
                  />
                  <div className="trending-item-texts">
                    <div className="topic-title-stats">
                      <p className="topic-title">{item.title}</p>
                      <div className="topic-stats">
                        {item.reply} replies • {item.like}{" "}
                        <i
                          className={`bi bi-chevron-double-up like-btn ${
                            item.liked ? "liked" : ""
                          }`}
                          onClick={() => handleLikeClick(item.id)}
                        ></i>
                      </div>
                    </div>
                    <p className="topic-content">{item.desc}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <Button variant="view-more">
          VIEW MORE <i className="bi bi-chevron-right"></i>
        </Button>
      </div>
    </>
  );
}

export default CommunityTrending;
