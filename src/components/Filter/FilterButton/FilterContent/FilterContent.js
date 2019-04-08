import React from 'react';
import './FilterContent.css';

const FilterContent = ({typeChange, garageChange}) => {
    return(
        <div className='filter-div'>
            <form>
                <div className='filter-item'>
                    <label htmlFor='type'>Property type</label>
                    <select id='type' className='dropMenu' name="Property type" onChange={typeChange}>
                        <option value="any">Any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                    </select>
                </div>

                <div className='filter-item'>
                    <label htmlFor='garage'>Garage</label>
                    <select id='garage' className='dropMenu' name="Garage" onChange={garageChange}>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>

            </form>
        </div>
    );
};

export default FilterContent;
