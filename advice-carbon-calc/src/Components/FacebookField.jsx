function FacebookField(props) {
  return (
    <label>
      Weekly screen time of Facebook
      <input type="number" min="0" name="minutes" id="minutes" onKeyUp={props.handleFacebook} />
      <label htmlFor="minutes">Minutes</label>
    </label>
  );
}

export default FacebookField;
