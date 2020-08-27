import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post 
              profilePic="https://scontent.fblr8-1.fna.fbcdn.net/v/t1.0-9/51469817_1120372861457978_7875438886497812480_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=jkLnJyGybmoAX9nNJ7N&_nc_ht=scontent.fblr8-1.fna&oh=67425877a9ad836c3cdeb7ebd53afee0&oe=5F6CE472"
              message="woo"
              timestamp="15:15pm"
              username="Rahul Sharma"
              image="https://scontent.fblr8-1.fna.fbcdn.net/v/t1.0-9/s960x960/118676906_10160342437779578_756579914317220937_o.jpg?_nc_cat=1&_nc_sid=730e14&_nc_ohc=k1U2-x4VlZsAX-fuB0S&_nc_ht=scontent.fblr8-1.fna&tp=7&oh=321ffaf23706ab0e9209bd9ac023677d&oe=5F6E8275"
            />
            <Post 
              profilePic="https://scontent.fblr8-1.fna.fbcdn.net/v/t1.0-9/51469817_1120372861457978_7875438886497812480_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=jkLnJyGybmoAX9nNJ7N&_nc_ht=scontent.fblr8-1.fna&oh=67425877a9ad836c3cdeb7ebd53afee0&oe=5F6CE472"
              message="woo"
              timestamp="15:15pm"
              username="Rahul Sharma"
              image="https://scontent.fblr8-1.fna.fbcdn.net/v/t1.0-9/s960x960/118676906_10160342437779578_756579914317220937_o.jpg?_nc_cat=1&_nc_sid=730e14&_nc_ohc=k1U2-x4VlZsAX-fuB0S&_nc_ht=scontent.fblr8-1.fna&tp=7&oh=321ffaf23706ab0e9209bd9ac023677d&oe=5F6E8275"
            />
        </div>
    )
}

export default Feed
