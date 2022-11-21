import { useState } from 'react'
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Landing from "./Pages/Landing"
import NewPhone from "./Pages/NewPhone";
import Ranking from "./Pages/Ranking";
import Relevance from "./Pages/Relevance";
import Results from "./Pages/Results";
import Screentime from "./Pages/Screentime";


import Storage from "./Pages/Storage"

let pageCount = 0;

function App() {
  //show the correct page
  const [thisPage, setThisPage] = useState(pageCount);
  function changePage() {
    if (pageCount < 7) {
     pageCount++
    setThisPage(pageCount)
    }
}
  //store the results in an object
  return (
    <div className="App">
      <Header/>
      {thisPage === 0 && <Landing/>}
      {thisPage === 1 && <Ranking/>}
      {thisPage === 2 && <Relevance/>}
      {thisPage === 3 && <Storage/>}
      {thisPage === 4 && <Screentime/>}
      {thisPage === 5 && <NewPhone/>}
      {thisPage === 6 && <Results/>}
      <button onClick={() => changePage()}>Next Page</button>
      <Footer/>


</div>
)
  }
export default App;
