import { useState } from "react";
import api from "../api";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const res = await api.post("/register", { username, password });

    if (res.data.success) {
      alert("Account created!");
    } else {
      alert("User already exists");
    }
  };

  return (
    <div>
      <h2>Create Account</h2>
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;