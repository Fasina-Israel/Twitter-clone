import React from 'react'
import './SideBar.css'

const SideBarOptions = ({active, text, Icon}) => {
  return (
    <div className={`sideBar-options ${active && 'sideBar-options--active'}`}>
      <Icon className="icon"/>

        <h2>
        {text}
            </h2>
           
        </div>
  )
}

export default SideBarOptions