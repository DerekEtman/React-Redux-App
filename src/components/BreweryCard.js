import React from 'react';
import { Card } from 'semantic-ui-react';

export const BreweryCard = (props) => {
    const {brewery_type, city, country, name, phone, postal_code, street, state, } = props.data;
    console.log("BreweryCard Props: ", props.data.brewery)
    return(
        <>
    <Card className="brew_card">
        <Card.Content>
            <Card.Header className="brew_name" >
                <h2>{name}</h2>
            </Card.Header>
            <Card.Meta className="brew_name">
                <h4>Brewery Type: {brewery_type}
                </h4>
            </Card.Meta>
            <Card.Description className="brew_address">{street}, {city}, {state}
            </Card.Description> 
            <Card.Description className="brew_address">
            {postal_code}, {country}
            </Card.Description>
        </Card.Content>
    </Card>
        </>
    )
}