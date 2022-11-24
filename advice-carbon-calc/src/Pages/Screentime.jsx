import { useState } from "react";
import TiktokField from "../Components/TikTokField"
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
    console.log("addMe:", addMe);
    console.log("the screenTimeTotal is:", screenTimeTotal);
    screenTimeTotal = screenTimeTotal + addMe;
    setUserScreenTime(screenTimeTotal);
  }

  function handleTiktok(e) {
    console.log(e.target.value);
    let screenTimeCarbon = e.target.value * 2.63;
    let tikTok = screenTimeCarbon;
    setUserScreenTime((old) => {
      return { ...old, tikTok };
    });
  }
  function handleInstagram(e) {
    console.log(e.target.value);
    let screenTimeCarbon = e.target.value * 0.79;
    let instagram = screenTimeCarbon;
    setUserScreenTime((old) => {
      return { ...old, instagram };
    });
  }
  function handleFacebook(e) {
    console.log(e.target.value);
    let screenTimeCarbon = e.target.value * 1.05;
    let facebook = screenTimeCarbon;
    setUserScreenTime((old) => {
      return { ...old, facebook };
    });
  }
  function handleSnapchat(e) {
    console.log(e.target.value);
    let screenTimeCarbon = e.target.value * 0.87;
    let snapchat = screenTimeCarbon;
    setUserScreenTime((old) => {
      return { ...old, snapchat };
    });
  }
  function handleTwitter(e) {
    console.log(e.target.value);
    let screenTimeCarbon = e.target.value * 0.60;
    let twitter = screenTimeCarbon;
    setUserScreenTime((old) => {
      return { ...old, twitter };
    });
  }
  function handleYoutube(e) {
    console.log(e.target.value);
    let screenTimeCarbon = e.target.value * 0.46;
    let youtube = screenTimeCarbon;
    setUserScreenTime((old) => {
      return { ...old, youtube };
    });
  }
  function handlePinterest(e) {
    console.log(e.target.value);
    let screenTimeCarbon = e.target.value * 1.3;
    let pinterest = screenTimeCarbon;
    setUserScreenTime((old) => {
      return { ...old, pinterest };
    });
  }
  function handleLinkedin(e) {
    console.log(e.target.value);
    let screenTimeCarbon = e.target.value * 0.71;
    let linkedin = screenTimeCarbon;
    setUserScreenTime((old) => {
      return { ...old, linkedin };
    });
  }
  function handleReddit(e) {
    console.log(e.target.value);
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

    //send data back to app
    props.saveScreenTime(userScreenTime);
  }
  return (
    <>
      <h1>Screentime or Greentime?</h1>
    <section className="screentime">
      <form onSubmit={handleSubmit}>
        <div className="input-box" id="screentime-input">
          {props.checked.includes("tiktok") && <TiktokField handleTiktok={handleTiktok}/>}
        </div>
        <div className="input-box" id="screentime-input">
          {props.checked.includes("instagram") && <InstagramField handleTiktok={handleInstagram}/>}
        </div>
        <div className="input-box" id="screentime-input">
          {props.checked.includes("facebook") && <FacebookField handleTiktok={handleFacebook}/>}
        </div>
        <div className="input-box" id="screentime-input">
          {props.checked.includes("snapchat") && <SnapchatField handleTiktok={handleSnapchat}/>}
        </div>
        <div className="input-box" id="screentime-input">
          {props.checked.includes("twitter") && <TwitterField handleTiktok={handleTwitter}/>}
        </div>
        <div className="input-box" id="screentime-input">
          {props.checked.includes("youtube") && <YoutubeField handleTiktok={handleYoutube}/>}
        </div>
        <div className="input-box" id="screentime-input">
          {props.checked.includes("pinterest") && <PinterestField handleTiktok={handlePinterest}/>}
        </div>
        <div className="input-box" id="screentime-input">
          {props.checked.includes("linkedin") && <LinkedinField handleTiktok={handleLinkedin}/>}
        </div>
        <div className="input-box" id="screentime-input">
          {props.checked.includes("reddit") && <RedditField handleTiktok={handleReddit}/>}
        </div>
        <button>Done</button>
      </form>
    </section>
    </>
  );
}

export default Screentime;
