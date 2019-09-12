import axios from 'axios';

export const FIND_BREWERY = "FIND_BREWERY";
export const FIND_BREWERY_SUCCESS = "FIND_BREWERY_SUCCESS";
export const FIND_BREWERY_FAILURE = "FIND_BREWERY_FAILURE";

export const findBrewery = () => dispatch => {
    dispatch({type:FIND_BREWERY});
    axios
        .get('https://api.openbrewerydb.org/breweries')
        .then(res => {
            dispatch({ type:FIND_BREWERY_SUCCESS, 
            payload: res.data});
        })
        .catch( err =>
            dispatch({type:FIND_BREWERY_FAILURE, payload: err.response.message})
        );
};