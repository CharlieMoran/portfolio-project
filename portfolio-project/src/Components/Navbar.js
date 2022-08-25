import { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <h1 className="logo">Hop Off</h1>
        </Link>
        <Link to="/Game">
          <h1 className="game">Game</h1>
        </Link>
        <Link to="/Leaderboard">
          <button className="new">Leaderboard</button>
        </Link>
        <Link to="/Login">
          <button className="new">Login</button>
        </Link>
        <Link to="/Signup">
          <button className="new">Signup</button>
        </Link>
        <Link to="/FAQ">
          <button className="new">FAQ</button>
        </Link>
      </div>
    );
  }
}

export default Navbar;