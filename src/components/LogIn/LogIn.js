import React from 'react';
import './LogIn.css'


const LogIn = (props) => {
    return (
        <button onClick={props.displayForm} className="login">LogIn</button>
    );
};


export default LogIn;