import React, { Component } from 'react';
import './WeatherTile.css';

class WeatherTile extends Component {

	render() {

		let weatherTiles = this.props.forcast.map((day, index) => {
			return (
				<div key={index}>
					<div className={ day.icon ? day.icon : 'default-icon' }></div>
					<p>{day.summary}</p>
					<p>Min: {day.temperatureMin}</p>
					<p>Max: {day.temperatureMax}</p>
				</div>
			);
		});

		return (
			<div className="WeatherTileContainer">
				{weatherTiles}
		  	</div>
		);
	}
}

export default WeatherTile;
