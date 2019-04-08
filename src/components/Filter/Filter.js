import React from 'react';
import './Filter.css';
import bed from '../../static/bed_min.png'
import bath from '../../static/bath_min.png'
import FilterButton from './FilterButton/FilterButton';

const Filter = ({bedInput, bathInput, typeChange, garageChange}) => {
    return(
        <div className='filterdiv'>
            <div className='input-div'>
                <img className='input-logo' src={bed} />
                <strong>Beds</strong>
                <input className='input' type='number' min='1' max='50' defaultValue='' placeholder='Any' onChange={bedInput}/>
            </div>
            <div className='input-div'>
                <img className='input-logo' src={bath} />
                <strong>Baths</strong>
                <input className='input' type='number' min='1' max='50' defaultValue='' placeholder='Any' onChange={bathInput}/>
            </div>
            <div className='filter-btn'>
                <strong>Filters</strong>
                <FilterButton typeChange={typeChange} garageChange={garageChange}/>
            </div>
        </div>
    );
};

export default Filter;
