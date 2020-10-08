import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={21} weatherState={'sun'}/>
        <WeatherExtraInfo humidity={20} wind={1} />
    </div>
)

export default WeatherData;