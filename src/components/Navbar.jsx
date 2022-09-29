import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">My Chat</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/38302/father-daughter-beach-sea-38302.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <span>john</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar