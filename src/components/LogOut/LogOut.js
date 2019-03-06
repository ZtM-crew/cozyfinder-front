import React from 'react';
import './LogOut.css'


const LogOut = (props) => {
    return (
        <button onClick={props.onClick} className="logout">Log Out</button>
    );
}


export default LogOut;