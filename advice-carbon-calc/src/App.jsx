import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProgressButton from "./Components/ProgressButton";
import Landing from "./Pages/Landing"
import NewPhone from "./Pages/NewPhone";
import Ranking from "./Pages/Ranking";
import Relevance from "./Pages/Relevance";
import Results from "./Pages/Results";
import Screentime from "./Pages/Screentime";
import Storage from "./Pages/Storage"


function App() {
  
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <Ranking/>
      <Relevance/>
      <Storage/>
      <Screentime/>
      <NewPhone/>
      <Results/>
      <ProgressButton/>
      <Footer/>








      <section className="ranking">
        <h1>Where do you rank yourself</h1>
        <input type="range" min="1" max="5" value="1" id="ranking" name="ranking" required />
      </section>
      <section className="cloud-storage">
        <h2>Any cloud storage?</h2>
        <form>
          <div className="input-box">
            <label for="google">
              Google
              <input type="checkbox" id="google" name="google" value="" />
            </label>
          </div>
          <div className="input-box">
            <label for="icloud">
              Icloud
              <input type="checkbox" id="icloud" name="icloud" value="" />
            </label>
          </div>
          <div className="input-box">
            <label for="onedrive">
              Onedrive
              <input type="checkbox" id="onedrive" name="onedrive" value="" />
            </label>
          </div>
          <div className="input-box">
            <label for="dropbox">
              Dropbox
              <input type="checkbox" id="dropbox" name="dropbox" value="" />
            </label>
          </div>
        </form>
      </section>
      <section className="apps">
        <h2>Apps</h2>
        <form>
          <div className="input-box">
            <label for="tiktok">
              TikTok
              <input type="checkbox" id="tiktok" name="tiktok" value="" />
            </label>
          </div>
          <div className="input-box">
            <label for="instagram">
              Instagram
              <input type="checkbox" id="instagram" name="instagram" value="" />
            </label>
          </div>
          <div className="input-box">
            <label for="facebook">
              Facebook
              <input type="checkbox" id="facebook" name="facebook" value="" />
            </label>
          </div>
          <div className="input-box">
            <label for="snapchat">
              Snapchat
              <input type="checkbox" id="snapchat" name="snapchat" value="" />
            </label>
          </div>
          <div className="input-box">
            <label for="twitter">
              Twitter
              <input type="checkbox" id="twitter" name="twitter" value="" />
            </label>
          </div>
          <div className="input-box">
            <label for="youtube">
              Youtube
              <input type="checkbox" id="youtube" name="youtube" value="" />
            </label>
          </div>
          <div className="input-box">
            <label for="pinterest">
              Pinterest
              <input type="checkbox" id="pinterest" name="pinterest" value="" />
            </label>
          </div>
          <div className="input-box">
            <label for="linkedin">
              LinkedIn
              <input type="checkbox" id="linkedin" name="linkedin" value="" />
            </label>
          </div>
          <div className="input-box">
            <label for="reddit">
              Reddit
              <input type="checkbox" id="reddit" name="reddit" value="" />
            </label>
          </div>
        </form>
      </section>
      <section className="cloud-data">
        <h2>How big are you digitally speaking?</h2>
        <form>
          <div className="input-box">
            <label>
              User choice 1 size in GB
              <input type="number" required />
            </label>
          </div>
          <div className="input-box">
            <label>
              User choice size in GB
              <input type="number" required />
            </label>
          </div>
          <div className="input-box">
            <label>
              User choice 3 size in GB
              <input type="number" required />
            </label>
          </div>
          <h3>Storage total: "something" GB</h3>
        </form>
      </section>
    </div>
  );
}


export default App;
