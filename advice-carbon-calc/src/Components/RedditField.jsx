function RedditField(props) {
  return (
    <label>
      Weekly screen time of Reddit
      <input type="number" min="0" name="minutes" id="minutes" onKeyUp={props.handleReddit} />
      <label htmlFor="minutes">Minutes</label>
    </label>
  );
}

export default RedditField;
