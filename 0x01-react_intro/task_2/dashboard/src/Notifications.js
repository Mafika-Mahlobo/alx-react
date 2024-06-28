import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png"
import {getLatestNotification} from './utils';

export function Notifications() {

    const buttonStyle = {
        position: 'absolute',
        right: '10px',
        top: '10px',
    };

    const closeIconStyle = {
        width: '10px',
        height: 'auto',
    };

    const handleButtonClick = () => {
        console.log("Close button has been clicked");
    }

    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li>New course available</li>
                <li className="urgent">New resume available</li>
                <li className="urgent">{getLatestNotification()}</li>
            </ul>
            <button style={buttonStyle} onClick={handleButtonClick} aria-label="Close">
                <img src={closeIcon} alt="" style={closeIconStyle} />
            </button>
        </div>
    );
}