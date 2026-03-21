import { useState } from "react";
import Login from "./components/Login";
import AdminPanel from "./components/AdminPanel";
import NewsList from "./components/NewsList";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dark, setDark] = useState(true);

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
      
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <AdminPanel />
      )}

      <NewsList />
    </div>
  </>
);        

}

export default App;