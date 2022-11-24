import React from 'react'

function Header(props) {
  return (
    <div className="header">
    <ul>
    <button onClick={props.homePage}>Home</button>
    <button onClick={props.tips}>Tips & Tricks</button>
    </ul>
    </div>
  )
}

export default Header