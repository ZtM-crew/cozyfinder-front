import React from 'react';
import './List.css';
import Item from './Item/Item';

const List = ({searchRes}) =>{

    return(
        <div className={"container"}>
            <div className={'list-cont'}>
                <h3>Results</h3>
                <div className={'results'}>

                    {
                        searchRes.map((item, i) => {

                                return (
                                    <Item key={i} name={searchRes[i][0]} value={searchRes[i][1]}  />
                                )

                        })
                    }

                </div>
            </div>
        </div>
    )


};

export default List;