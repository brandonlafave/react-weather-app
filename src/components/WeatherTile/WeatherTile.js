import React, { Component } from 'react';
import './WeatherTile.css';

class WeatherTile extends Component {

	render() {

		let weatherTiles = this.props.forcast.map((day, index) => {
			return (
				<div className="WeatherTile" key={index}>
					<p>{day.summary}</p>
					<div className={ day.icon ? day.icon : 'default-icon' }></div>
					<div className="pull-right">
						<p>Min: {day.temperatureMin}˚</p>
						<p>Max: {day.temperatureMax}˚</p>
					</div>
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
