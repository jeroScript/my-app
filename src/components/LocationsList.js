import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocations';

const strToComponent = cities => (
    cities.map( (city) => (
        <WeatherLocation key={city} city={city}/>
    ))
)

const LocationsList = ({cities}) => (
    <div>
       {strToComponent(cities)}
    </div>
)

LocationsList.propTypes ={
    cities: PropTypes.array.isRequired,
}

export default LocationsList;