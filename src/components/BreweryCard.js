import React from 'react';

export const BreweryCard = (props) => {
    const {brewery_type, city, country, name, phone, postal_code, street, state, } = props.data;
    console.log("BreweryCard Props: ", props.data)
    return(
    <>

     <h3 className="brew_name">{name}</h3>
        <div className="brew_meta">
            <h4>Brewery Type: {brewery_type}</h4>

            <div className="brew_address_wrapper">
              <p className="brew_address"> {street}, {city}, {state}</p>
              <p className="brew_address">{postal_code}, {country}</p>
            </div>
        </div>
    </>
    )
}