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
                <div className="profile__topLeftDetails">
                    <h1>FunnyCommentary</h1>
                    <h3>840k followers</h3>
                </div>
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
                        url={'https://www.youtube.com/embed/WY5MQtAym5w'}
                        title={"🔴 Let's Setup The End Of Program"}

                    />
                    <RecentItem
                        url={'https://www.youtube.com/embed/TEIf-OW_PZw'}
                        title={"🔴 Let's Build A Social Network!! Team Project!"}

                    />
                    <RecentItem
                        url={'https://www.youtube.com/embed/s2s9SaCLYHk'}
                        title={'🔴Teamwork Makes The Dream Work! Team Project!'}

                    />
                    <RecentItem
                        url={'https://www.youtube.com/embed/x3-O-Ond9AI'}
                        title={'🔴 A Short Class On Getting A Job'}

                    />

                </div>
            </div>
        </div>
    )
}

export default Profile
