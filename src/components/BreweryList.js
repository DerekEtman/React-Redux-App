import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

import {BreweryCard} from './BreweryCard';

const BreweryList = (props) => {
    console.log("BreweryList props: ", props);

    return (
        <div>
            <h1>BreweryList</h1>
            <Grid columns='three'>
            <Grid.Column>{props.brewery.map(item => (<BreweryCard key={item.id} data={item} />))}</Grid.Column>
            </Grid>
        </div>
    )
}

export default BreweryList