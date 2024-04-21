import "../components-css/CommunitySuggestion.css";
import React, { useState } from "react";

function CommunitySuggestion() {
  const [suggestionTopicList, setSuggestionTopicList] = useState([
    {
      id: 1,
      img: "../../Resources/Profile1.png",
      title: "Data Privacy Predicaments: Navigating Compliance Challenges",
      desc: "Heightened regulatory scrutiny and evolving privacy laws present complex challenges for organizations striving to protect sensitive data and maintain compliance, emphasizing the importance of implementing robust data privacy frameworks and governance practices to safeguard customer information and avoid costly penalties.",
      reply: 10,
      like: 10,
      liked: false,
    },
    {
      id: 2,
      img: "../../Resources/Profile2.png",
      title: "AI-Powered Threats: Unveiling the Dark Side of Artificial Intelligence",
      desc: "Cybercriminals are leveraging AI and machine learning techniques to orchestrate sophisticated attacks, posing unprecedented challenges for traditional security defenses, necessitating the development of AI-driven security solutions and proactive threat hunting strategies to detect and mitigate AI-powered threats effectively.",
      reply: 10,
      like: 10,
      liked: false,
    },
    {
      id: 3,
      img: "../../Resources/Profile3.png",
      title: "Cryptojacking Epidemic: Guarding Against Unauthorized Cryptocurrency Mining",
      desc: "The rise of cryptojacking attacks has emerged as a pervasive threat, with cybercriminals exploiting vulnerable systems to secretly mine cryptocurrencies without the knowledge or consent of users, highlighting the importance of deploying robust endpoint protection measures and network security controls to detect and prevent unauthorized mining activities.",
      reply: 10,
      like: 10,
      liked: false,
    },
  ]);

  const handleLikeClick = (id) => {
    setSuggestionTopicList((prevList) =>
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
      <div className="community-suggestion-container">
        <h3>Suggestion</h3>
        <div className="suggestion-topic-list">
          {suggestionTopicList.map((item) => {
            return (
              <div className="suggestion-item" key={item.id}>
                <img src={item.img} alt="" className="community-profile-pic" />
                <div className="suggestion-item-texts">
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
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CommunitySuggestion;
