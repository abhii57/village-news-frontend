import { useState } from "react";
import api from "../api";

function Login({ setIsLoggedIn }) {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const login = async () => {
    console.log("LOGIN CLICKED");

    try {
      const res = await api.post("/login", form);

      console.log("FULL RESPONSE:", res);
      console.log("DATA:", res.data);

      if (res.data.success === true) {
        alert("Login Success ✅");
        setIsLoggedIn(true);
      } else {
        alert("Wrong credentials ❌");
      }
    } catch (err) {
      console.log("ERROR:", err);
      alert("Server error ❌");
    }
  };

  return (
  <div className="login-box">
    <h2>Admin Login</h2>

    <input name="username" placeholder="Username" onChange={handleChange} />
    <input
      name="password"
      type="password"
      placeholder="Password"
      onChange={handleChange}
    />

    <button onClick={login}>Login</button>
  </div>
);
}

export default Login;