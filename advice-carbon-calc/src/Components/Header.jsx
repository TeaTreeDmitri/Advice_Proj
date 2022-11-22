import React from 'react'

function Header(props) {
  return (
    <>
    <div>Header</div>
    <button onClick={props.homePage}>Home</button>
    </>
  )
}

export default Header