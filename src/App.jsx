import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card"
import Logo from "./components/logo/Logo"

const App = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  return (
    <div>
      <Logo />
      <div className="container">
      {user ? (
        <>
        <Logo />
        <Navbar />
        <Card />
        <span className="username">{user}</span>
        </>
      ): (
        <div className="login">
          <input
           type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}/>
          <button onClick={() => setUser(username)}>Login</button>
        </div>
      )}
    </div>
    </div>
  )
}

export default App