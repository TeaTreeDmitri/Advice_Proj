import React from 'react'

function Checkbox(props) {
    console.log(props)
  return (
    <div className={props.name +"-box"}>
    <label htmlFor="dropbox">
      <p>{props.contents.name}</p>
      <input type="checkbox" id="dropbox" name="dropbox" onChange={props.handleCheck} />
    </label>
  </div>
  )
}

export default Checkbox