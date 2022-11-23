import { useState } from "react";
import GoogleField from "../Components/GoogleField";

function Storage(props) {
  console.log(props.checked);
  const [userStorage, setUserStorage] = useState({});
  let carbonTotal = 0;
  let totalStorage = 0;

  function totalTheStorage(addMe) {
    totalStorage = totalStorage + addMe;
    setUserStorage(totalStorage);
  }

  function handleGoogleChange(e) {
    let carbonTotal = e.target.value * 2;
    let googleStore = carbonTotal;
    setUserStorage((old) => {
      return { ...old, googleStore };
    });
  }

  function handleIcloudChange(e) {
    let carbonTotal = e.target.value * 2;
    let icloudStore = carbonTotal;
    setUserStorage((old) => {
      return { ...old, icloudStore };
    });
  }

  function handleOnedriveChange(e) {
    let carbonTotal = e.target.value * 2;
    let onedriveStore = carbonTotal;
    setUserStorage((old) => {
      return { ...old, onedriveStore };
    });
  }

  function handleDropboxChange(e) {
    let carbonTotal = e.target.value * 2;
    let dropboxStore = carbonTotal;
    setUserStorage((old) => {
      return { ...old, dropboxStore };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserStorage(userStorage);
    totalTheStorage(carbonTotal);

    console.log("totalStorage:", totalStorage);
    console.log("Total co2 emissions per app:", userStorage);
    console.log("carbonTotal:", carbonTotal);
    //send data back to app
    props.saveStorage(userStorage);
  }

  return (
    <section className="cloud-data">
      <h1>How big are you digitally speaking?</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          {/* <label htmlFor="storage1">
            Google storage size in GB */}
            {props.checked.includes("google") && <GoogleField handleGoogleChange={handleGoogleChange} updatedList={props.updatedList}/>}
            {/* <input
              type="number"
              name="google-storage"
              id="google-storage"
              required
              autoFocus
              placeholder="Enter a number"
              onKeyUp={handleGoogleChange}
            /> */}
          {/* </label> */}
        </div>
        <div className="input-box">
          <label htmlFor="storage2">
            Icloud storage size in GB
            <input
              type="number"
              name="icloud-storage"
              id="icloud-storage"
              required
              placeholder="Enter a number"
              onKeyUp={handleIcloudChange}
            />
          </label>
        </div>
        <div className="input-box">
          <label htmlFor="storage3">
            Onedrive storage size in GB
            <input
              type="number"
              name="onedrive-storage"
              id="onedrive-storage"
              required
              placeholder="Enter a number"
              onKeyUp={handleOnedriveChange}
            />
          </label>
        </div>
        <div className="input-box">
          <label htmlFor="storage3">
            Dropbox storage size in GB
            <input
              type="number"
              name="dropbox-storage"
              id="dropbox-storage"
              required
              placeholder="Enter a number"
              onKeyUp={handleDropboxChange}
            />
          </label>
        </div>
        <button>Done</button>
      </form>
    </section>
  );
}

export default Storage;
