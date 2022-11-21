import Checkbox from "./Checkbox";

function Relevance(props) {
  return (
    <>
      <section className="cloud-storage">
        <h2>Any cloud storage?</h2>
        <form>
          {props.RelevantOnline.map((item) =>(
        <Checkbox key={props.id} contents={props.RelevantOnline}/>
          ))}
         
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
        </form>
      </section>
    </>
  );
}

export default Relevance;
