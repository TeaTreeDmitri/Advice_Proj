function TwitterField(props) {
  return (
    <label>
    Weekly screen time of Twitter
    <input type="number" min="0" max="24" name="hour" id="hour"  />
    <label htmlFor="hour">Hours</label>
    <input type="number" min="0" max="59" name="minutes" id="minutes"  onKeyUp={props.handleTwitter} />
    <label htmlFor="minutes">Minutes</label>
  </label>
  )
}

export default TwitterField