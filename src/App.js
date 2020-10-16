import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationsList from './components/LocationsList';
import './App.css';

const cities = [
  'Buenos Aires',
  'Mendoza',
  'Madrid',
  'Santiago de chile',
  'Bogota',
  'Washington dc'
]
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationsList cities={cities}></LocationsList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
