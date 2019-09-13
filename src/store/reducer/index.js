import { FIND_BREWERY, FIND_BREWERY_SUCCESS } from '../actions';

// https://api.openbrewerydb.org/breweries

const initialState = {
    isFetching: false,
    error: '',
    brewery:[{
    id: 9999,
    name: "Almanac Beer Company",
    brewery_type: "micro",
    street: "651B W Tower Ave",
    city: "Alameda",
    state: "California",
    postal_code: "94501-5047",
    country: "United States",
    longitude: "-122.306283180899",
    latitude: "37.7834497667258",
    phone: "4159326531",
    website_url: "http://almanacbeer.com",
    updated_at: "2018-08-23T23:24:11.758Z",
    tag_list: []
    },
   ]
};


export const reducer = (state = initialState, action ) => {
    // console.log("REDUCER ACTION: ", action.payload);
    switch(action.type){
    case FIND_BREWERY_SUCCESS:
    console.log("SUCCESS state ", state)
    // console.log("action ", action.payload)
        const x = { 
            ...state,
             brewery: action.payload
        }
        // console.log("X: ", {...state.brewery, brewery: action.payload})
        return x;

    default:
        return state;
    }
};