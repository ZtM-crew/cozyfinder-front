import React from 'react';
import './LogIn.css'


const LogIn = ({login}) => {
    return (
        <button onClick={login} className="login">LogIn</button>
    );
};


export default LogIn;