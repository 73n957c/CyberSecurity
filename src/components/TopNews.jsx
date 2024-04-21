import "../components-css/TopNews.css";
import { Link } from "react-router-dom";

function TopNews() {
  const topNewsList = [
    {
      id: 1,
      img: "../../Resources/news2.jpg",
      title: "Zero Trust Revolution: Shattering Traditional Security Paradigms",
      desc: "The adoption of Zero Trust architecture is revolutionizing cybersecurity, replacing outdated trust assumptions with a comprehensive approach that scrutinizes every access attempt, regardless of origin.",
    },
    {
      id: 2,
      img: "../../Resources/news3.png",
      title: "Quantum Computing Arms Race: Implications for Cybersecurity",
      desc: "The global race for quantum supremacy intensifies as nations invest heavily in quantum computing research, raising critical questions about the future of cybersecurity in a post-quantum world.",
    },
    {
      id: 3,
      img: "../../Resources/news.jpg",
      title: "Dark Web Crackdown: Global Authorities Disrupt Underground Cybercrime Rings",
      desc: "International law enforcement agencies join forces to dismantle major dark web marketplaces, dealing a significant blow to cybercriminal networks trafficking in illicit goods and services.",
    },
  ];
  return (
    <>
      <div className="top-news-container">
        <h4>Today's Top News</h4>
        <div className="top-news-item-list">
          {topNewsList.map((item) => {
            return (
              <Link to="/newsinfo" className="carousel-link" key={item.id}>
                <div className="top-news-item">
                  <img src={item.img} alt="" className="top-news-img" />
                  <div className="top-news-text">
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

export default TopNews;
