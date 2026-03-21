import { useEffect, useState } from "react";
import api from "../api";

function NewsList() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const res = await api.get("/news");
    setNews(res.data);
  };

  const deleteNews = async (id) => {
    await api.delete(`/news/${id}`);
    fetchNews();
  };

  return (
    <div>
      <h2>All News</h2>

      {news.map((item) => (
        <div key={item.id} className="news-card">
          <h3>{item.title}</h3>
          <p>{item.content}</p>

          {/* ✅ IMAGE FIX HERE */}
          {item.image && (
            <img
             src={`https://village-news-backends.onrender.com/uploads/${item.image}`}
              alt=""
              width="200"
            />
          )}

          <br />
          <button onClick={() => deleteNews(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default NewsList;