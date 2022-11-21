import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProgressButton from "./Components/ProgressButton";
import Landing from "./Pages/Landing";
import NewPhone from "./Pages/NewPhone";
import Ranking from "./Pages/Ranking";
import Relevance from "./Pages/Relevance";
import Results from "./Pages/Results";
import Screentime from "./Pages/Screentime";
import Storage from "./Pages/Storage";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Ranking />
      <Relevance />
      <Storage />
      <Screentime />
      <NewPhone />
      <Results />
      <ProgressButton />
      <Footer />
    </div>
  );
}

export default App;
