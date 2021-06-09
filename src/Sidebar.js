import React from 'react'
import Channel from './Channel'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h5>FOLLOWED CHANNELS</h5>
                <Channel
                    avatar="https://i.imgur.com/X3Nn7gs.jpg"
                    name="jamesFowler"
                    followers="3.3M"
                />
                <Channel
                    avatar="https://memegenerator.net/img/images/300x300/71674434.jpg"
                    name="cleverguy"
                    followers="135k"
                />
                <Channel
                    avatar="https://leonnoel.com/photo2.png"
                    name="learnwithleon"
                    followers="1.2M"
                />
                <h5>RECOMMENDED CHANNELS</h5>
                <p className="sidebar__topShowMore">Show More</p>

            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search to Add Friends" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
