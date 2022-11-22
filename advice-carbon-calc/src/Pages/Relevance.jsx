function Relevance(props) {
  return (
    <>
      <section className="cloud-storage">
        <h2>Any cloud storage?</h2>
        <form>
          <div className="input-box">
            <label htmlFor="google">
              Google
              <input type="checkbox" id="google" name="google" onChange={props.handleCheck} />
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="icloud">
              Icloud
              <input type="checkbox" id="icloud" name="icloud" onChange={props.handleCheck} />
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="onedrive">
              Onedrive
              <input type="checkbox" id="onedrive" name="onedrive" onChange={props.handleCheck} />
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="dropbox">
              Dropbox
              <input type="checkbox" id="dropbox" name="dropbox" onChange={props.handleCheck} />
            </label>
          </div>
        </form>
      </section>
      
      <section className="apps">
        <h2>Apps</h2>
        <form>
          <div className="input-box">
            <label htmlFor="tiktok">
              TikTok
              <input type="checkbox" id="tiktok" name="tiktok" onChange={props.handleCheck} />
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="instagram">
              Instagram
              <input type="checkbox" id="instagram" name="instagram" onChange={props.handleCheck} />
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="facebook">
              Facebook
              <input type="checkbox" id="facebook" name="facebook" onChange={props.handleCheck} />
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="snapchat">
              Snapchat
              <input type="checkbox" id="snapchat" name="snapchat" onChange={props.handleCheck} />
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="twitter">
              Twitter
              <input type="checkbox" id="twitter" name="twitter" onChange={props.handleCheck} />
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="youtube">
              Youtube
              <input type="checkbox" id="youtube" name="youtube" onChange={props.handleCheck} />
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="pinterest">
              Pinterest
              <input type="checkbox" id="pinterest" name="pinterest" onChange={props.handleCheck} />
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="linkedin">
              LinkedIn
              <input type="checkbox" id="linkedin" name="linkedin" onChange={props.handleCheck} />
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="reddit">
              Reddit
              <input type="checkbox" id="reddit" name="reddit" onChange={props.handleCheck} />
            </label>
          </div>
        </form>
      </section>
    </>
  );
}

export default Relevance;
