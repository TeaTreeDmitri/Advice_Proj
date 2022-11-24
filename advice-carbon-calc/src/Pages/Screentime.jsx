import { useState } from "react";
import TiktokField from "../Components/TikTokField";
import InstagramField from "../Components/InstagramField";
import FacebookField from "../Components/FacebookField";
import SnapchatField from "../Components/SnapchatField";
import TwitterField from "../Components/TwitterField";
import YoutubeField from "../Components/YoutubeField";
import PinterestField from "../Components/PinterestField";
import LinkedinField from "../Components/LinkedinField";
import RedditField from "../Components/RedditField";

function Screentime(props) {
  const [userScreenTime, setUserScreenTime] = useState({});
  let screenTimeCarbon = 0;
  let screenTimeTotal = 0;

  function totalTheScreenTime(addMe) {
    console.log("the screenTimeTotal is:", screenTimeTotal);
    screenTimeTotal = screenTimeTotal + addMe;
    setUserScreenTime(screenTimeTotal);
  }
  function handleInstagram(e) {
    let screenTimeCarbon = e.target.value * 0.79;
    let instagram = screenTimeCarbon;
    setUserScreenTime((old) => {
      return { ...old, instagram };
    });
  }

  function handleTiktok(e) {
    let screenTimeCarbon = e.target.value * 2.63;
    let tikTok = screenTimeCarbon;
    setUserScreenTime((old) => {
      return { ...old, tikTok };
    });
  }

  function handleFacebook(e) {
    let screenTimeCarbon = e.target.value * 1.05;
    let facebook = screenTimeCarbon;
    setUserScreenTime((old) => {
      return { ...old, facebook };
    });
  }
  function handleSnapchat(e) {
    let screenTimeCarbon = e.target.value * 0.87;
    let snapchat = screenTimeCarbon;
    setUserScreenTime((old) => {
      return { ...old, snapchat };
    });
  }
  function handleTwitter(e) {
    let screenTimeCarbon = e.target.value * 0.6;
    let twitter = screenTimeCarbon;
    setUserScreenTime((old) => {
      return { ...old, twitter };
    });
  }
  function handleYoutube(e) {
    let screenTimeCarbon = e.target.value * 0.46;
    let youtube = screenTimeCarbon;
    setUserScreenTime((old) => {
      return { ...old, youtube };
    });
  }
  function handlePinterest(e) {
    let screenTimeCarbon = e.target.value * 1.3;
    let pinterest = screenTimeCarbon;
    setUserScreenTime((old) => {
      return { ...old, pinterest };
    });
  }
  function handleLinkedin(e) {
    let screenTimeCarbon = e.target.value * 0.71;
    let linkedin = screenTimeCarbon;
    setUserScreenTime((old) => {
      return { ...old, linkedin };
    });
  }
  function handleReddit(e) {
    let screenTimeCarbon = e.target.value * 2.48;
    let reddit = screenTimeCarbon;
    setUserScreenTime((old) => {
      return { ...old, reddit };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserScreenTime(userScreenTime);
    totalTheScreenTime(screenTimeCarbon);
    console.log("userScreenTime:", userScreenTime);
    console.log(screenTimeTotal);

    //send data back to app
    props.saveScreenTime(userScreenTime);
  }
  return (
    <section className="screentime">
      <h1>Screentime or Greentime?</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-box" id="screentime-input">
          {props.checked.includes("tiktok") && <TiktokField handleTiktok={handleTiktok} />}
        </div>
        <div className="input-box" id="screentime-input">
          {props.checked.includes("instagram") && <InstagramField handleInstagram={handleInstagram} />}
        </div>
        <div className="input-box" id="screentime-input">
          {props.checked.includes("facebook") && <FacebookField handleFacebook={handleFacebook} />}
        </div>
        <div className="input-box" id="screentime-input">
          {props.checked.includes("snapchat") && <SnapchatField handleSnapchat={handleSnapchat} />}
        </div>
        <div className="input-box" id="screentime-input">
          {props.checked.includes("twitter") && <TwitterField handleTwitter={handleTwitter} />}
        </div>
        <div className="input-box" id="screentime-input">
          {props.checked.includes("youtube") && <YoutubeField handleYoutube={handleYoutube} />}
        </div>
        <div className="input-box" id="screentime-input">
          {props.checked.includes("pinterest") && <PinterestField handlePinterest={handlePinterest} />}
        </div>
        <div className="input-box" id="screentime-input">
          {props.checked.includes("linkedin") && <LinkedinField handleLinkedin={handleLinkedin} />}
        </div>
        <div className="input-box" id="screentime-input">
          {props.checked.includes("reddit") && <RedditField handleReddit={handleReddit} />}
        </div>
        <button>Done</button>
      </form>
    </section>
  );
}

export default Screentime;
