import React from 'react';
import logo from '../../static/logo_s.png';
import './title.css';

const Title = () => {

    return(
        <div className='tc'>
            <a href='/'>
                <img className='logo' src={logo} alt='house-logo'/>
                <h1 className='title'>COZYFINDER</h1>
            </a>
        </div>
    )
};

export default Title;