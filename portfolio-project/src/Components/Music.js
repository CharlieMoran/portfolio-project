import React from "react";
import Intro from "../assets/sounds/Intro.wav"
import "./Music.css"

class Music extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
      hidden: true,
    }
    this.url = Intro;
    this.audio = new Audio(this.url);
    this.audio.addEventListener("ended", function(){
        this.currentTime = 0;
        this.play();
    }, false)
  }
 
  play = () => {
    var hidden = false;
    hidden = !hidden;
    if(hidden) {
        document.getElementById("pause").style.visibility = "visible"
    } else {
        document.getElementById("pause").style.visibility = "hidden"
    }
  this.setState({play: true, pause: false, loop: true, hidden: false,})
    this.audio.play();
  }
  
  pause = () => {
    var hidden = true;
    hidden = !hidden;
    if(hidden) {
        document.getElementById("pause").style.display = "visible";
    } else {
        document.getElementById("pause").style.visibility = "hidden";
    }
  this.setState({ play: false, pause: true, loop: true, hidden: true})
    this.audio.pause();
  }
  
  render() {
    
  return (
    <div>
      <button onClick={this.play} id="play">🍌</button>
      <button onClick={this.pause} id="pause"> / Pause</button>
    </div>
    );
  }
}

export default Music;