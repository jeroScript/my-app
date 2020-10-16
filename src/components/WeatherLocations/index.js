import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather'
import './styles.css'
import { CircularProgress } from 'material-ui';
import PropTypes from 'prop-types';

const apiKey = '4e2de8681516bdf3ecf7ff69162b4a3d';

// const data1 = {
//     temperature: 30,
//     weatherState: null,
//     humidity: 12,
//     wind: '12 m/s'
// }



class WeatherLocation extends Component {
    
    constructor({city}) {
        super();
        this.state = {
            city,
            data: null,
        }
    }

    componentDidMount() {
        const {city} = this.state;
        const endPoint = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

        fetch(endPoint).then(async (resp) => {
            const data = await resp.json();
            const temp = transformWeather(data) 
            this.setState({
                city: data.name,
                data: temp
            })
        })    
    }
    

    render = () => {
        const {city, data} = this.state;
        return (
            <div  className="weatherLocationCont">
                <Location city={city}/>
                { data ? <WeatherData data={data}/> : <CircularProgress/> }
                {/* <button onClick={this.handleUpdateClick} >Actualizar</button> */}
            </div>
        )
    }   
};


WeatherLocation.propTypes = {
    city: PropTypes.string
}

export default WeatherLocation;