import { useState } from "react";
import DropboxField from "../Components/DropboxField";
import GoogleField from "../Components/GoogleField";
import IcloudField from "../Components/IcloudField";
import OnedriveField from "../Components/OnedriveField";

function Storage(props) {
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

    props.saveStorage(userStorage);
  }

  return (
    <section className="cloud-data">
      <h1>How big are you digitally speaking?</h1>

      <form onSubmit={handleSubmit}>

        <div className="input-box">
          {props.checked.includes("google") && (
            <GoogleField handleGoogleChange={handleGoogleChange} updatedList={props.updatedList} />
          )}
        </div>
        <div className="input-box">
          {props.checked.includes("icloud") && (
            <IcloudField handleIcloudChange={handleIcloudChange} updatedList={props.updatedList} />
          )}
        </div>
        <div className="input-box">
          {props.checked.includes("onedrive") && (
            <OnedriveField handleOndriveChange={handleOnedriveChange} updatedList={props.updatedList} />
          )}
        </div>
        <div className="input-box">
        {props.checked.includes("dropbox") && <DropboxField handleDropboxChange={handleDropboxChange} updatedList={props.updatedList}/>}
        </div>         
        <button>Done</button>

      </form>
    </section>
  );
}

export default Storage;
