import React from 'react'
import NavBar from './Navbar/Nav'
import SideNavBar from "./SideBar/SideNavbar"
function AdminBoard() {
  return (
    <div>
      <NavBar/>
      <div className='sideNavBar-container'>
      <SideNavBar/>
      <h1>This is admin Dashboard</h1>
      </div>
   
      
    </div>
  )
}

export default AdminBoard
