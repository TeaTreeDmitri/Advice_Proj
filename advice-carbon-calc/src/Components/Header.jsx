import React from 'react'

function Header(props) {
  return (
    <div className="header">
    <button onClick={props.homePage}>Home</button>
    <button onClick={props.tips}>Tips & Tricks</button>
    </div>
  )
}

export default Header