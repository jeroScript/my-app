import React, { Component } from 'react';
import Location from './Location';
import WeatherData from '../WeatherData';
import './styles.css'
import { SUN } from '../../constants/weathers';

const location = 'Mendoza';
const apiKey = '4e2de8681516bdf3ecf7ff69162b4a3d';
const endPoint = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

const data1 = {
    temperature: 30,
    weatherState: SUN,
    humidity: 12,
    wind: '12 m/s'
}



class WeatherLocation extends Component {
    
    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data1,
        }
    }

    getWeatherState = weather => {
        return SUN
    }

    getData = (weaterData) => {
        const {humidity, temp} = weaterData.main;
        const { speed } = weaterData.wind;
        const weatherState = this.getWeatherState(this.weather);

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`
        };

        return data
    };

    handleUpdateClick = () => (
        fetch(endPoint).then(async (resp) => {
            const data = await resp.json();
            const temp = this.getData(data) 
            this.setState({
                city: data.name,
                data: temp
            })
        })
    )

    render = () => {
        const {city, data} = this.state;
        return (
            <div  className="weatherLocationCont">
                <Location city={city}/>
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick} >Actualizar</button>
            </div>
        )
    }   
};

export default WeatherLocation;