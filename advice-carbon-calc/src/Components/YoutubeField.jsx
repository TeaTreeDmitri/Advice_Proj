function YoutubeField(props) {
  return (
    <label>
    Weekly screen time of Youtube
    <input type="number" min="0" max="24" name="hour" id="hour"  />
    <label htmlFor="hour">Hours</label>
    <input type="number" min="0" max="59" name="minutes" id="minutes"  onKeyUp={props.handleYoutube} />
    <label htmlFor="minutes">Minutes</label>
  </label>
  )
}

export default YoutubeField