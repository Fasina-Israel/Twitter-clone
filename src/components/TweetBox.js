import React from 'react'
import {Button} from '@material-ui/core'
import Avatar from './../Assets/Avatar.svg'
import './TweetBox.css'

const TweetBox = () => {
  return (
    <div className='tweetBox'>
        <form >
            <div className= 'tweetBox_input'>
                <img src={Avatar} alt="" />
                <input type="text" placeholder='Write your tweet' />
            </div>
            <Button className="tweetButton">Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox