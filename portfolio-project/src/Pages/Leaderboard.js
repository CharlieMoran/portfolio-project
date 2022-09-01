import "./Leaderboard.css";
import LB from "../images/placeholderlb.jpeg"

function Leaderboard() {

  return (<section>
  <h1 className="leaderboard">Who's the big dog?</h1>
  <img src={LB}/>
  </section>
  );
}

export default Leaderboard;