function TikTokField(props) {
  return (
    <label>
      Weekly screen time of TikTok
      <input type="number" min="0" name="minutes" id="minutes" onKeyUp={props.handleTikTok} />
      <label htmlFor="minutes">Minutes</label>
    </label>
  );
}

export default TikTokField;
