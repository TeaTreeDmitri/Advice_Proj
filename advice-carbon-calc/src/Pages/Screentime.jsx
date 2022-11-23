import { useState } from "react";

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

  function handleTikTok(e) {
    console.log(e.target.value);
    let screenTimeCarbon = e.target.value * 2.63;
    let tikTok = screenTimeCarbon;
    setUserScreenTime((old) => {
      return { ...old, tikTok };
    });
  }
  function handleFacebook(e) {
    console.log(e.target.value);
    let screenTimeCarbon = e.target.value * 0.79;
    let facebook = screenTimeCarbon;
    setUserScreenTime((old) => {
      return { ...old, facebook };
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
    <section className="screentime">
      <h1>Screentime or Greentime?</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-box" id="screentime-input">
          <label>
            Daily screen time of app1
            <input type="number" min="0" max="24" name="hour" id="hour" required />
            <label htmlFor="hour">Hours</label>
            <input type="number" min="0" max="59" name="minutes" id="minutes" required onKeyUp={handleTikTok} />
            <label htmlFor="minutes">Minutes</label>
          </label>
        </div>
        <div className="input-box" id="screentime-input">
          <label>
            Daily screen time of app2
            <input type="number" min="0" max="24" name="hour" id="hour" required />
            <label htmlFor="hour">Hours</label>
            <input type="number" min="0" max="59" name="minutes" id="minutes" required onKeyUp={handleFacebook} />
            <label htmlFor="minutes">Minutes</label>
          </label>
        </div>
        <button>Done</button>
      </form>
    </section>
  );
}

export default Screentime;
