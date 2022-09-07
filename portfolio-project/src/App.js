import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Components/Navbar";
import Game from "./Pages/Game"
import Leaderboard from "./Pages/Leaderboard"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import FAQpage from "./Pages/FAQ"
import Music from "./Components/Music"

function App() {

  return (
    <div className="App">
      <h1>Hop Off by Charlie Moran</h1>
      <Nav />
      <Music />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/game" element={<Game />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/faq" element={<FAQpage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
