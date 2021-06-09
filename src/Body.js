import React from 'react'
import Profile from './Profile'
import './Body.css'
import Stream from './Stream'

const Body = () => {
    return (
        <div className="body">
            <div className="body__stream">
                <Stream />
            </div>

            <div className="body__left">
                <Profile />
            </div>
            <div className="body__rightPlaceHolder">

            </div>
        </div>
    )
}

export default Body
