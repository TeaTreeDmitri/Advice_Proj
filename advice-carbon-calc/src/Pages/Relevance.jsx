import Checkbox from "./Checkbox";

function Relevance(props) {
  return (
    <>
      <section className="cloud-storage">
        <h2>Any cloud storage?</h2>
        <form>
          {props.RelevantOnline.map(item =>(
        <Checkbox key={item.name} name={item.name}/>
          ))}
         
        </form>
      </section>

    </>
  );
}

export default Relevance;
