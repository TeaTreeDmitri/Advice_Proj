function Results(props) {
  /*
  ---USER'S TOTAL CO2 
  all values in object added together
  function Basket(props) {
    const [showForm, setShowForm] = useState(false);
    function getTotal(){
        let total = 0;
        props.cart.forEach(item => {
            total += item.price * item.amount;
        });
        return total;
    }
  */
  let grandTotal = 0;
  let runningTotal = 0
  runningTotal = props.userCO2.storage;
  runningTotal = runningTotal + props.userCO2.screentime;
  grandTotal = runningTotal + props.userCO2.replace;


  


  //---USER'S CARBON TOTAL AGAINST EUROPEAN AVERAGE

  const eurAvg = 540;
  let span = ""


  const userDiff = grandTotal / eurAvg;
  if (userDiff > 1) {
    span = "more"
  } else if (userDiff < 1) {
    span = "less"
  } else if (userDiff === 1) {
     span = "exactly the same"
  }



  const eurRank2 = eurAvg * 0.75
  const eurRank3 = eurAvg * 1
  const eurRank4 = eurAvg *1.5
  const eurRank5 = eurAvg *2

  let userRank = "";

  if (grandTotal > eurRank5) {
    userRank = 1;
  } else if (grandTotal > eurRank4) {
    userRank = 2;
  } else if (grandTotal > eurRank3) {
    userRank = 3;
  } else if (grandTotal > eurRank2) {
    userRank = 4;
  } else {
    userRank = 5};
  

  const rankingDiff = userRank - props.userCO2.ranking;
  let shock = "";
  

  console.log("userRank: ", userRank)
  console.log("predicted Rank", props.userCO2.ranking)
  console.log("ranking difference", rankingDiff)

  if (rankingDiff < -1) {
    shock = "wayyyy worse"
  }  else if (rankingDiff === -1 || rankingDiff === 0 || rankingDiff ===1) {
    shock = "about the same as";
  } else if (rankingDiff > 1 ) {
    shock = "wayyyy better";
  }

 



  const userOffset = grandTotal * 0.8;
  
  

  return (
    <section className="results-page">
      <h1>Your year in carbon</h1>
      <div className="results-box">
        <p>
          In a year your phone and cloud storage alone creates <span>{grandTotal.toFixed(2)}</span> CO2kg per year...<br></br>But what the heck does that mean?
        </p>
      </div>
      <div className="results-box">
        <p>
          Well... The average phone in Europe uses <span>{eurAvg}CO2kg</span> per year which means you’re using <span>{span}</span> than the average and polluting <span>{userDiff.toFixed(1)}</span> times that the european average
          You're expectation was <span>{shock}</span> than reality! Shocker!
        </p>
      </div>
      <div className="results-box">
        <p>In order to ‘offset’ your phone and online storage carbon usage, it would cost you about <span>${userOffset.toFixed(2)}</span> every year!</p>
      </div>

      <div className="button-container">
        <button>Challenge your friends!</button>
      </div>
    </section>
  );
  }

export default Results;

  /*
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
  */
   /*

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

  */ 