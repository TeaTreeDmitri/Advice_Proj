import React from "react";

function Storage() {
  return (
    <section className="cloud-data">
      <h1>How big are you digitally speaking?</h1>
      <form>
        <div className="input-box">
          <label htmlFor="storage1">
            User choice 1 size in GB
            <input type="number" required id="storage1" name="storage1" />
          </label>
        </div>
        <div className="input-box">
          <label htmlFor="storage2">
            User choice size in GB
            <input type="number" name="storage2" id="storage2" required />
          </label>
        </div>
        <div className="input-box">
          <label htmlFor="storage3">
            User choice 3 size in GB
            <input type="number" name="storage3" id="storage3" required />
          </label>
        </div>
        <h3>Storage total: "something" GB</h3>
      </form>
    </section>
  );
}

export default Storage;
