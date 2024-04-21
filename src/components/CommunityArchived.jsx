import "../components-css/CommunityArchived.css";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

function CommunityArchived() {
  const archivedTopicList = [
    {
      id: 1,
      img: "../../Resources/Profile1.png",
      title: "Social Engineering Red Flags: Recognizing Manipulative Tactics",
      desc: "Cyber attackers exploit human vulnerabilities through social engineering techniques, leveraging psychological manipulation to trick individuals into divulging confidential information or performing actions that compromise security, underscoring the importance of user education and awareness in thwarting social engineering attacks.",
    },
    {
      id: 2,
      img: "../../Resources/Profile3.png",
      title: "Zero-Day Dilemma: Addressing the Threat of Unpatched Vulnerabilities",
      desc: "Zero-day vulnerabilities pose significant risks to organizations, as cyber attackers exploit undisclosed software flaws to launch targeted attacks before patches are available, necessitating proactive vulnerability management strategies and rapid response protocols to mitigate potential impacts.",
    },
    {
      id: 3,
      img: "../../Resources/Profile1.png",
      title: "Ransomware Rampage: Strategies for Prevention and Recovery",
      desc: "The surge in ransomware attacks has become a major concern for businesses of all sizes, prompting the need for comprehensive cybersecurity measures, robust backup solutions, and incident response plans to mitigate the impact of ransomware infections and ensure business continuity.",
    },
  ];

  return (
    <>
      <div className="community-archived-container">
        <h3>Archived</h3>
        <div className="archived-topic-list">
          {archivedTopicList.map((item) => {
            return (
              <div className="archived-item" key={item.id}>
                <img src={item.img} alt="" className="community-profile-pic" />
                <div className="archived-item-texts">
                  <div className="topic-title-stats">
                    <p className="topic-title">{item.title}</p>
                  </div>
                  <p className="topic-content">{item.desc}</p>
                </div>
              </div>
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

export default CommunityArchived;
