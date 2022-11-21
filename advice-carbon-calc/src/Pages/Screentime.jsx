function Screentime() {
  return (
    <section className="screentime">
      <h1>Screentime or Greentime?</h1>
      <form>
        <div className="input-box">
          <label>
            Daily screen time of app1
            <input type="number" min="0" max="24" name="hour" id="hour" required />
            <label htmlFor="hour">Hours</label>
            <input type="number" min="0" max="59" name="minutes" id="minutes" required />
            <label htmlFor="minutes">Minutes</label>
          </label>
        </div>
      </form>
    </section>
  );
}

export default Screentime;
