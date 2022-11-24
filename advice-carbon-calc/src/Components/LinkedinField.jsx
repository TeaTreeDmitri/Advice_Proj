function LinkedinField(props) {
  return (
    <label>
      Weekly screen time of LinkedIn
      <input type="number" min="0" name="minutes" id="minutes" onKeyUp={props.handleLinkedin} />
      <label htmlFor="minutes">Minutes</label>
    </label>
  );
}

export default LinkedinField;
