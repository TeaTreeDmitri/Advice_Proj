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

function App() {
  //Add and remove checked item from the list
  const [checked, setChecked] = useState([]);
  const [userCO2, setUserCO2] = useState({
    storage: 0,
    screentime: 0,
    replace: 0.
  })


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

  //const numbers = /^[0-9]+$/;
  const numbers = /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/;
  

  //Add and remove checked item from the list


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
    console.log(data);
    totalStorage(data)
  }
  //total storage info and save to userCO2 obj
  function totalStorage(data) {
        let total = 0;
        data.filter(item => {
          total += item.amount
        })
        console.log(total);
    // setUserCO2(storage)
  }

  return (
    <>
    <div className="App">
      
      <Header homePage={homePage}/>
      {thisPage === 0 && <Landing />}
      {thisPage === 1 && <Ranking />}
      {thisPage === 2 && <Relevance handleCheck={handleCheck} />}
      {thisPage === 3 && (<>
        <Storage saveStorage={saveStorage}  />

        </>)}
      {thisPage === 4 && <Screentime />}
      {thisPage === 5 && <NewPhone />}
      {thisPage === 6 && <Results />}
      {thisPage != 3 &&<button onClick={() => changePage()}>Next Page</button>}
      <Footer />
    </div>
    </>
  )
}
export default App;
