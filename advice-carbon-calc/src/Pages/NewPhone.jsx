function NewPhone() {
  return (
    <section className="new-phone">
      <h1>Out with the old</h1>
      <form>
        <label htmlFor="id">You replace your phone, roughly every</label>
        <input type="number" name="year" id="year" required />
        <label>years?</label>
      </form>
    </section>
  );
}

export default NewPhone;
