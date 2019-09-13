import React, { useState, useEffect } from 'react';
import {findBrewery} from '../store/actions';

export const BrewerySearch = (props) => {
    const {find, isFetching} = props;
    const [newBreweryFind, setNewBreweryFind] = useState();
    console.log("NewBreweryFind: ", newBreweryFind);

// console.log("Brewery Search find: ", find)

    // useEffect(() => {
    //     find();
    // },[find])

    // if(isFetching){
    //     return <h2>Loading...</h2>
    // }

    const handleChanges = e =>{
        setNewBreweryFind(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        find(newBreweryFind);
    }

    return(
      <>
        <div className="searchBar">
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="newBreweryFind" 
                className="searchField"
                value={newBreweryFind}
                onChange={handleChanges}
                />
                
                <button className="searchButton" onClick={handleSubmit} >
                    Find a Pint
                </button>
            </form>
        </div>
      </>
    )
};