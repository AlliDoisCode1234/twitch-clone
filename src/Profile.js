import React from 'react'
import './Profile.css'
import RecentItem from './RecentItem'

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__topLeft">
                <img
                    src="https://cdn.dribbble.com/users/1162077/screenshots/4649464/skatter-programmer_still_2x.gif?compress=1&resize=400x300"
                    alt="profile avatar"
                />
            </div>
            <div className="profile__topLeftDetails">
                <h1>Super_Smart_Programmer</h1>
                <h3>840k followers</h3>
            </div>
            <div className="profile__topRight">
                <i className="fas fa-heart graybg"></i>
                <i className="fas fa-bell graybg"></i>
                <i className="fas fa-ellipsis-v"></i>
            </div>
            <div className="profile__menu">
                <h2 className="active">Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2><i className="fas fa-arrow-up"></i></h2>
                <h2>Chat</h2>
            </div>

            <div className="profile__recent">
                <h2>Recent broadcasts</h2>
                <div className="profile__recentItems">
                    <RecentItem
                        url={'https://www.youtube.com/embed/ktjafK4SgWM'}
                        title={'Learn the MERN Stack - Full Tutorial for Beginners (MongoDB, ExpressJS, ReactJS, NodeJS'}

                    />
                </div>
            </div>
        </div>
    )
}

export default Profile
