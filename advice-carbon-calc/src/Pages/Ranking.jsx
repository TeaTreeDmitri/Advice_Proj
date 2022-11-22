import { useState } from "react"

function Ranking() {
  const [message, setMessage] = useState("Let's be honest here!");
  function getRank(e) {
    let rank = parseInt(e.target.value) 
    if (rank === 1) {
      setMessage("I'm a complete chimney")
    } else if (rank === 2) {
      setMessage("I'm pretty bad")
    } else if (rank === 3) {
      setMessage("I'm super average!")
    } else if (rank === 4) {
      setMessage("I'm an eco warrior")
    } else if (rank === 5 ) {
      setMessage("I'm literally a tree")
    }
    let percentile = rank;

    console.log(percentile);
    return percentile;
  }

  return (
    <section className="ranking">
      <h1>Where do you rank yourself</h1>

      <label htmlFor="ranking">
      Compared the average...
        <input type="range" default="3"min="1" max="5" id="ranking" name="ranking" required onChange={getRank} />
      </label>
      <p>{message}</p>
    </section>
  );
}

export default Ranking;
