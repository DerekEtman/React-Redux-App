import React, {useEffect} from 'react';
import { connect } from 'react-redux';

// style
import './App.css';

// actions
import { findBrewery } from './store/actions'

// components
import BreweryList from './components/BreweryList';
import {BrewerySearch} from './components/BrewerySearch';


function App({brewery, findBrewery, isFetching}) {
  console.log("App Props: ", brewery);




  const newBrewerySearch = item => {
    // console.log("APP NEWBREWSEARCH ITEM: ", item)
    findBrewery(item);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="welcome">
          <h1>Search Bar</h1>
          <h4>Welcome to the Search Bar</h4>
          <h5>Use our search to find a local brewery.</h5>
        <BrewerySearch fetch={isFetching} find={newBrewerySearch}/>
        </div>
      </header>

      <body className="App-body">
        <BreweryList brewery={brewery} />
      </body>
    </div>
  );
}

const mapToStateProps = state => {
  return {
    brewery:state.brewery
  }
}

export default connect(mapToStateProps,{ findBrewery })(App);
