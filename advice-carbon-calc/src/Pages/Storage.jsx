function Storage(props) {
  return (
    <section className="cloud-data">
      <h1>How big are you digitally speaking?</h1>
      <form>
        <div className="input-box">
          <label htmlFor="storage1">
            Please enter your Google storage size in GB
            <input
              type="text"
              step=".01"
              required
              id="google-storage"
              name="google-storage"
              onBlur={props.handleStorageInput}
              // onChange={props.calculateTotal}
              placeholder="Enter a number"
            />
          </label>
        </div>
        <div className="input-box">
          <label htmlFor="storage2">
            Please enter your Icloud storage size in GB
            <input
              type="number"
              name="icloud-storage"
              id="icloud-storage"
              required
              placeholder="Enter a number"
              onBlur={props.handleStorageInput}
              // onChange={props.calculateTotal}
            />
          </label>
        </div>
        <div className="input-box">
          <label htmlFor="storage3">
            Please enter your Onedrive storage size in GB
            <input
              type="number"
              name="onedrive-storage"
              id="onedrive-storage"
              required
              placeholder="Enter a number"
              onBlur={props.handleStorageInput}
              // onChange={props.calculateTotal}
            />
          </label>
        </div>
        <div className="input-box">
          <label htmlFor="storage3">
            Please enter your Dropbox storage size in GB
            <input
              type="number"
              name="dropbox-storage"
              id="dropbox-storage"
              required
              placeholder="Enter a number"
              onBlur={props.handleStorageInput}
              //onChange={props.calculateTotal}
            />
          </label>
        </div>
        <h3>Storage total: {props.cloudStorage} GB</h3>
      </form>
    </section>
  );
}

export default Storage;
