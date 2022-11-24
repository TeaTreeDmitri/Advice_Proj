import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Landing from "./Pages/Landing";
import NewPhone from "./Pages/NewPhone";
import Ranking from "./Pages/Ranking";
import Relevance from "./Pages/Relevance";
import Results from "./Pages/Results";
import Screentime from "./Pages/Screentime";

import Storage from "./Pages/Storage";

let pageCount = 0;
let updatedList = [];

function App() {
  //Add and remove checked item from the list
  const [checked, setChecked] = useState([]);
  const [userCO2, setUserCO2] = useState({
    storage: 0,
    screentime: 0,
    replace: 0,
    ranking: 0,
  });

  //Add and remove checked item from the list
  const handleCheck = (event) => {
    updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.id];
    } else {
      updatedList.splice(checked.indexOf(event.target.id), 1);
    }
    setChecked(updatedList);
  };

  //regex for numbers only
  const numbers = /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/;

  //show the correct page
  const [thisPage, setThisPage] = useState(pageCount);
  function changePage() {
    if (pageCount < 7) {
      pageCount++;
      setThisPage(pageCount);
    }
  }

  function homePage() {
    pageCount = 0;
    setThisPage(pageCount);
  }

  //receive the storage info
  function saveStorage(data) {
    console.log("saveStorage receives this:", data);
    totalStorage(data);
  }
  //total storage info and save to userCO2 obj
  function totalStorage(data) {
    console.log("totalStorage receives this data:", data);
    let storageEmissionsTotal = 0;
    // obj.values returns us an array of the values from the object this function receives
    let dataAsArray = Object.values(data);
    dataAsArray.forEach((item) => {
      storageEmissionsTotal += item;
      //set userCo2.storage state
      userCO2.storage = storageEmissionsTotal;
    });
    console.log("the sum of storage emissions:", storageEmissionsTotal);
    setUserCO2(storageEmissionsTotal);
    //increment page count to move to next page
    pageCount++;
    setThisPage(pageCount);
    console.log(userCO2);
  }

  //receive the user expected rank info
  function saveUserRank(data) {
    let userRank = data;
    setUserCO2({
      ranking: userRank,
    });
  }

  //receive the screentime info
  function saveScreenTime(data) {
    console.log("saveScreenTime receives this:", data);
    totalScreenTime(data);
  }
  function totalScreenTime(data) {
    console.log("totalScreenTime gets this data:", data);
    let appEmissionsTotal = 0;
    // obj.values returns us an array of the values from the object this function receives
    let dataArray = Object.values(data);
    dataArray.forEach((item) => {
      appEmissionsTotal += item;
      //store screentimte total to userCo2.screentime state
      console.log(userCO2);
      userCO2.screentime = appEmissionsTotal;
    });
    setUserCO2(appEmissionsTotal);
  }

  //receive user phone replacement data
  function saveNewPhone(e){
    let years = e.target.value;
    let replacementCO2 = 117 / years;
    setUserCO2({replace: replacementCO2})
  }

  return (
    <>
      <div className="App">
        <Header homePage={homePage} />
        <div className="content">

        {thisPage === 0 && <Landing />}
        {thisPage === 1 && <Ranking saveUserRank={saveUserRank} />}
        {thisPage === 2 && <Relevance handleCheck={handleCheck} />}
        {thisPage === 3 && <Storage saveStorage={saveStorage} checked={checked} />}
        {thisPage === 4 && <Screentime saveScreenTime={saveScreenTime} checked={checked} />}
        {thisPage === 5 && <NewPhone saveNewPhone={saveNewPhone}/>}
        {thisPage === 6 && <Results userCO2={userCO2}/>}
        {thisPage != 3 && <button onClick={() => changePage()}>Next Page</button>}
        </div>
        <Footer />
      </div>
    </>
  );
}
export default App;
