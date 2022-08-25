import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Components/Navbar";
import Game from "./Pages/Game"
import Leaderboard from "./Pages/Leaderboard"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import FAQ from "./Pages/FAQ"

function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/game" element={<Game />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
