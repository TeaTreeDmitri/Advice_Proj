function SnapchatField(props) {
  return (
    <label>
      Weekly screen time of Snapchat
      <input type="number" min="0" name="minutes" id="minutes" onKeyUp={props.handleSnapchat} />
      <label htmlFor="minutes">Minutes</label>
    </label>
  );
}

export default SnapchatField;
