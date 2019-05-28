import React from 'react';
import './Item.css';

const Item = ({name, value}) => {

    return (
        <div>
            <h4>{name} : ${value}</h4>
        </div>
    )
};

export default Item;