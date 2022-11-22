import {useState} from "react"

function Storage(props) {
  const [userStorage, setUserStorage] = useState(0);
  let carbonTotal = 0;
  let totalStorage = 0;

  function totalTheStorage(addMe) {
    totalStorage = totalStorage + addMe
    setUserStorage(totalStorage);
    console.log(totalStorage);
  }

  function handleGoogleChange(e) {
    let carbonTotal = (e.target.value*2)
    userStorage.googleStore = carbonTotal;
    } totalTheStorage(carbonTotal);
  
  

  function handleIcloudChange(e) {
    let carbonTotal = (e.target.value*2)
    userStorage.icloudStore = carbonTotal;
  }

  function handleOnedriveChange(e) {
    let carbonTotal = (e.target.value*2)
    userStorage.onedriveStore = carbonTotal;
  }

  function handleDropboxChange(e) {
    let carbonTotal = (e.target.value*2)
    userStorage.dropboxStore = carbonTotal;
  }

  function handleSubmit(e){
    e.preventDefault();
    setUserStorage(userStorage)
    console.log(userStorage);
    
    // props.saveStorage(userStorage);
  }


  return (
    <section className="cloud-data">
      <h1>How big are you digitally speaking?</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <label htmlFor="storage1">
            Google storage size in GB
            <input
              type="number"
              name="google-storage"
              id="google-storage"
              required
              autoFocus
              placeholder="Enter a number"
              onKeyUp={handleGoogleChange}
            />
          </label>
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
