function Results(props) {
  /*
  ---USER'S TOTAL CO2 
  const userTotal {
    data needed:

      total storage CO2 in mb
        requires:
          Σ  each location CO2 rating * amount of mb

          +

      total screentime CO2 in minutes
          Σ  each app CO2 rating per minute * minute

          +

      phone replacement as a yearly cost
          phone replacement CO2 / amount of years between replacements
    }

  ---USER'S CARBON TOTAL AGAINST EUROPEAN AVERAGE
  const eurAvg {
    Xco2
  }
  const userDiff {
    userTotal / eurAvg
    if (userDiff > 1) {
      <span> more </span>
    } else if (userDiff < 1) {
      <span> less </span>
    } else if (userDiff === 1) {
       <span> exactly the same! </span>
    }
  }

  ---USER'S CARBON TOTAL AGAINST EXPECTATION
  const userExpectation {
    user expectation 
    const rank1 = eurAvg * 0.5
    const rank2 = eurAvg * 0.75
    const rank3 = eurAvg * 1
    const rank4 = eurAvg *1.5
    const rank5 = eurAvg *2

    if (userTotal = > rank5) {
      userRank = 5
    } else if (userTotal = > rank4) {
      userRank = 4
    } else if (userTotal = > rank3) {
      userRank = 3
    } else if (userTotal = > rank2) {
      userRank = 2
    } else {
      userRank = 1
    }

    const = rankingDiff = (userRank - userExpectation)

    if (rankingDiff = < -1) {
      <span>wayyyy better</span>
    }  else if (rankingDiff >= -1 && <= 1) {
      <span>about right</span>
    } else if (rankingDiff > 1 ) {
      <span>wayyyy worse</span>
    }
  }
    ---USER'S CARBON OFFSET in €
  const userOffset {
      userTotal * carbon offset cost
  }
   */

  return (
    <section className="results-page">
      <h1>Your year in carbon</h1>
      <div className="results-box">
        <p>
          In a year your phone and cloud storage creates ***** CO2g/e<br></br>But what the heck does that mean?
        </p>
      </div>
      <div className="results-box">
        <p>
          The average person in Europe uses ***, which means you’re *** than the average, and polluting *** than you
          expected!
        </p>
      </div>
      <div className="results-box">
        <p>In order to ‘offset’ your carbon usage, it would cost you about ***€!</p>
      </div>
      <div className="button-container">
        <button>Challenge your friends!</button>
        <button>Tips and tricks</button>
      </div>
    </section>
  );
}

export default Results;
