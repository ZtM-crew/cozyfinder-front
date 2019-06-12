import React from 'react';
import Filter from '../Filter/Filter';
import './SearchBar.css'



const SearchBar = ({searchChange, bedInput, bathInput, typeChange, garageChange, searchButton, error}) => {

    let err = (error !== 0) ? 'Location not found' : null

    return(



        <div className="searchdiv">
            <form onSubmit={e => {e.preventDefault()}} > {/**Avoid to refresh the page when enter pressed**/}
                <fieldset className='fs'>
                    <div className="inner-form">
                        <div className="input-field">
                            <button className="btn-search" type="button" onClick={searchButton} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                </svg>
                            </button>
                            <input id="search" type="search"
                                   placeholder="Search neighbourhood values. Ex.: Upper West Side"
                                   defaultValue='' onChange={searchChange}
                            onKeyDown={searchChange}/>
                        </div>
                        <p className="error-msg">{err}</p>

                    </div>
                </fieldset>
            </form>

            {/*<Filter bedInput={bedInput} bathInput={bathInput} typeChange={typeChange} garageChange={garageChange} />*/}

        </div>



    );

};

export default SearchBar;
