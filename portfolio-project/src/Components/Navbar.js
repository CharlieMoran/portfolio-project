import { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import Logo from "../images/hop-off.png"

class Navbar extends Component {
  
  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <button className="logo"><img src={Logo} width="50px" height="25px"/></button>
        </Link>
        <Link to="/Game">
          <button className="game">Game</button>
        </Link>
        <Link to="/Leaderboard">
          <button className="leaderboard">Leaderboard</button>
        </Link>
        <Link to="/Login">
          <button className="login">Login</button>
        </Link>
        <Link to="/Signup">
          <button className="signup">Signup</button>
        </Link>
        <Link to="/FAQ">
          <button className="faq">FAQ</button>
        </Link>
      </div>
    );
  }
}

export default Navbar;