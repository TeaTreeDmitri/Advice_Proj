function Ranking() {
  function getPercentile(e) {
    let percentile = e.target.value;

    console.log(percentile);
    return percentile;
  }

  return (
    <section className="ranking">
      <h1>Where do you rank yourself</h1>

      <label htmlFor="ranking">
        I'm in the percentile
        <input type="range" min="1" max="5" id="ranking" name="ranking" required onChange={getPercentile} />
      </label>
    </section>
  );
}

export default Ranking;
