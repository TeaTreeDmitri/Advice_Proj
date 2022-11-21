import React from 'react'

function Checkbox(props) {
  return (
    <div className={props.name +"-box"}>
    <label htmlFor="dropbox">
      {props.name}
      <input type="checkbox" id="dropbox" name="dropbox" onChange={props.handleCheck} />
    </label>
  </div>
  )
}

export default Checkbox