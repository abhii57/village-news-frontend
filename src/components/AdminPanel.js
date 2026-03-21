import { useState } from "react";
import api from "../api";

function AdminPanel() {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const addNews = async () => {
    const data = new FormData();

    data.append("title", form.title);
    data.append("content", form.content);
    data.append("image", image);

    try {
      await api.post("/news", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("News Added ✅");
    } catch (err) {
      console.log(err);
      alert("Error ❌");
    }
  };

  return (
    <div className="admin-card">
      <h2>Add News</h2>

      <input
        name="title"
        placeholder="Title"
        onChange={handleChange}
      />

      <textarea
        name="content"
        placeholder="Content"
        onChange={handleChange}
      />

      <input type="file" onChange={handleImage} />

      <button onClick={addNews}>Add News</button>
    </div>
  );
}

export default AdminPanel;