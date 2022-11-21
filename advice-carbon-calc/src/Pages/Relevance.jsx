import Checkbox from "./Checkbox";

function Relevance(props) {
  return (
    <>
      <section className="cloud-storage">
        <h2>Any cloud storage?</h2>
        <form>
          {props.RelevantOnline.map(location =>(
        <Checkbox key={location.name} name={location.name}/>
          ))}
         
        </form>
      </section>

    </>
  );
}

export default Relevance;
