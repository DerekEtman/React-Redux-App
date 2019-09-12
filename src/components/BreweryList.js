import React from 'react';

import {BreweryCard} from './BreweryCard';

const BreweryList = (props) => {
    console.log("BreweryList props: ", props.brewery);

    return (
        <div>
            <h1>BreweryList</h1>
            <h3>{props.brewery.map(item => (<BreweryCard key={item.id} data={item} />))}</h3>
            {/* <BreweryCard /> */}
        </div>
    )
}

export default BreweryList