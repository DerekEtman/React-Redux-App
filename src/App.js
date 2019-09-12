import React from 'react';
import { connect } from 'react-redux';

// style
import './App.css';

// actions
import { findBrewery } from './store/actions'
import BreweryList from './components/BreweryList';


function App(props) {
  console.log("App Props: ", props.brewery);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Does it work?</h1>
        <BreweryList brewery={props.brewery} />

      </header>
    </div>
  );
}

const mapToStateProps = state => {
  return {
    brewery:state.brewery
  }
}

export default connect(mapToStateProps,{ findBrewery })(App);
