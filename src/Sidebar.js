import React from 'react'
import Channel from './Channel'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h5>FOLLOWED CHANNELS</h5>
            <Channel
                avatar="https://i.imgur.com/X3Nn7gs.jpg"
                name="jamesFowler"
                followers="820k"
            />
            <Channel
                avatar="https://memegenerator.net/img/images/300x300/71674434.jpg"
                name="cleverguy"
                followers="135k"
            />
            <h5>RECOMMENDED CHANNELS</h5>
            <p className="sidebar__topShowMore">Show More</p>
        </div>
    )
}

export default Sidebar
