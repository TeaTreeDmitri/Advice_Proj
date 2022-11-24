import { useState } from "react";

function Ranking(props) {
  const [message, setMessage] = useState("Let's be honest here!");
  const [ranking, setRanking] = useState(0);
  function getRank(e) {
    let rank = parseInt(e.target.value);
    if (rank === 1) {
      setMessage("I'm a complete chimney");
    } else if (rank === 2) {
      setMessage("I'm pretty bad");
    } else if (rank === 3) {
      setMessage("I'm super average!");
    } else if (rank === 4) {
      setMessage("I'm an eco warrior");
    } else if (rank === 5) {
      setMessage("I'm literally a tree");
    }
    handleRankChange(rank);
    let percentile = rank;
    return percentile;
  }

  function handleRankChange(data) {
    let ranking = data;

    if (ranking === 1) {
      setRanking(1);
    } else if (ranking === 2) {
      setRanking(2);
    } else if (ranking === 3) {
      setRanking(3);
    } else if (ranking === 4) {
      setRanking(4);
    } else if (ranking === 5) {
      setRanking(5);
    }
    let userRank = ranking;
    props.saveUserRank(userRank);
    return userRank;
  }

  return (
    <section className="ranking">
      <h1>Where do you rank yourself</h1>

      <label htmlFor="ranking">
        Compared to the average...
        <input type="range" default="3" min="1" max="5" id="ranking" name="ranking" required onChange={getRank} />
      </label>
      <p>{message}</p>
    </section>
  );
}

export default Ranking;
