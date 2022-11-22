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
let cloudStorage = [];

function App() {
  //Add and remove checked item from the list
  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.id];
    } else {
      updatedList.splice(checked.indexOf(event.target.id), 1);
    }
    setChecked(updatedList);
    console.log(updatedList);
  };

  //Store cloud storage numbers into an array
  //const numbers = /^[0-9]+$/;
  const numbers = /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/;

  /*  const handleStorageInput = (event) => {
    let num = event.target.value;
    if (event.target.value.length != 0) {
      num = (Math.round(num * 100) / 100).toFixed(2);
      cloudStorage.push(num);
      console.log("Cloudstorage in separate numbers", cloudStorage);
    } else {
      console.log("This string has no value");
    }
  }; */

  //v2
  //Add and remove checked item from the list
  const [hasValue, setHasValue] = useState([]);
  const handleStorageInput = (event) => {
    let storageList = [...hasValue];
    if (event.target.value.match(numbers)) {
      storageList = [...hasValue, event.target.value];
    } else if (event.target.value.length === 0) {
      storageList.splice(hasValue.indexOf(event.target.value), 1);
    }
    setHasValue(storageList);
    console.log("storageList is:", storageList);
  };

  ///calculate total
  const calculateTotal = (event) => {
    let total = 0;
    if (event.target.value.match(numbers)) {
      //total = event.target.value;
      total = cloudStorage.reduce((a, b) => a + b, 0);
      for (let i = 0; i < cloudStorage.length; i++) {
        total += cloudStorage[i];
      }
      console.log("The total is:", total);
    }
  };

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
  //store the results in an object
  return (
    <div className="App">
      <Header homePage={homePage}/>
      {thisPage === 0 && <Landing />}
      {thisPage === 1 && <Ranking />}
      {thisPage === 2 && <Relevance handleCheck={handleCheck} />}
      {thisPage === 3 && (
        <Storage handleStorageInput={handleStorageInput} calculateTotal={calculateTotal} cloudStorage={cloudStorage} />
      )}
      {thisPage === 4 && <Screentime />}
      {thisPage === 5 && <NewPhone />}
      {thisPage === 6 && <Results />}
      <button onClick={() => changePage()}>Next Page</button>
      <Footer />
    </div>
  );
}
export default App;
