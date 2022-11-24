function InstagramField(props) {
  return (
    <label>
      Weekly screen time of Instagram
      <input type="number" min="0" name="minutes" id="minutes" onKeyUp={props.handleInstagram} />
      <label htmlFor="minutes">Minutes</label>
    </label>
  );
}

export default InstagramField;
