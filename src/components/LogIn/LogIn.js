import React from 'react';
import './LogIn.css'


const LogIn = (props) => {
    return (
        <button onClick={props.onClick} className="login">LogIn</button>
    );
};


export default LogIn;