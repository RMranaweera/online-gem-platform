import React from 'react'
import NavBar from './Navbar/Nav'
import SideBar from "./AppSidebar"
import SideNavBar from "./SideBar/SideNavbar"
function AdminBoard() {
  return (
    <div>
      <NavBar/>
      <div className='sideNavBar-container'>
      <SideNavBar/>
      </div>
   
      
    </div>
  )
}

export default AdminBoard
