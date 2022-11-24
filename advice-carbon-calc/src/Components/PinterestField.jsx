function PinterestField(props) {
  return (
    <label>
      Weekly screen time of Pinterest
      <input type="number" min="0" name="minutes" id="minutes" onKeyUp={props.handlePinterest} />
      <label htmlFor="minutes">Minutes</label>
    </label>
  );
}

export default PinterestField;
