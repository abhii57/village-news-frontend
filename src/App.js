import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminPanel from "./components/AdminPanel";
import NewsList from "./components/NewsList";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dark, setDark] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      {/* 🔝 Navbar */}
      <div className="navbar">
        <h2>📰 DONEPUDI News</h2>

        <div>
          <button onClick={() => setDark(!dark)}>
            {dark ? "☀" : "🌙"}
          </button>

          {isLoggedIn && (
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className={dark ? "container dark" : "container"}>

        {/* 👇 LOGIN / REGISTER */}
        {!isLoggedIn && (
          <>
            {showRegister ? (
              <Register />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )}

            <button onClick={() => setShowRegister(!showRegister)}>
              {showRegister ? "Go to Login" : "Create Account"}
            </button>
          </>
        )}

        {/* 👇 ADMIN */}
        {isLoggedIn && <AdminPanel />}

        {/* 👇 NEWS */}
        <NewsList />

      </div>
    </>
  );
}

export default App;