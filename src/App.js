import React from 'react';
import { connect } from 'react-redux';

// style
import './App.css';

// actions
import { findBrewery } from './store/actions'

// components
import BreweryList from './components/BreweryList';
import {BrewerySearch} from './components/BrewerySearch';


function App(props) {
  console.log("App Props: ", props.brewery);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Grab A Pint</h1>     
      </header>

      <body className="App-body">
        <BrewerySearch />
        <BreweryList brewery={props.brewery} />
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
