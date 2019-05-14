import React from 'react';

const Item = ({name, value}) => {

    return (
        <div>
            <h4>{name} : ${value}</h4>
        </div>
    )
};

export default Item;