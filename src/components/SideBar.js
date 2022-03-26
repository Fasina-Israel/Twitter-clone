import TwitterIcon from '@material-ui/icons/Twitter';
import  './SideBar.css';
import React from 'react'
import SideBarOptions from './SideBarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from  '@material-ui/icons/Search';
import MessageIcon from  '@material-ui/icons/Message';
import BookmarksIcon from  '@material-ui/icons/Bookmarks';
import ListIcon from  '@material-ui/icons/List';
import MoreIcon from  '@material-ui/icons/More';
import {Button} from '@material-ui/core'
// import './../components/SideBar.css';
import './../../src/App.css'


const SideBar = () => {
  return (
    
    <div className='sideBar'>
        <TwitterIcon className='sideBar__twitterIcon'/>
        <SideBarOptions active Icon={HomeIcon} text="Home"/>
        <SideBarOptions Icon={SearchIcon} text="Explore"/> 
        <SideBarOptions Icon={TwitterIcon} text="Twitter"/>
        <SideBarOptions Icon={MessageIcon} text="Messages"/>
        <SideBarOptions Icon={BookmarksIcon} text="Bookmarks"/>
        <SideBarOptions Icon={ListIcon} text="List"/>
        {/* <SideBarOptions Icon={ProfileIcon} text="Profile"/> */}
        <SideBarOptions Icon={MoreIcon} text="More"/>
   
    <Button variant='outlined' className="sidebar__tweet" fullWidth>
    Tweet
    </Button>
    </div>
    
   
  )
}

export default SideBar