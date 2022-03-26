import React from 'react'
import './Feeds.css'
import TweetBox from './TweetBox'

const Feeds = () => {
  return (
    <div className='feeds'>
        
        <div className='feeds-header'>
            {/* <Header/> */}
            <h2>Home</h2>
        </div>
        {/* {/* <TweetBox/> */}
        {/* <Post/> */}
        {/* <Post/> */}
        {/* <Post/> */}
        {/* <Post/> */}
        <TweetBox/>
    </div>
  )
}

export default Feeds