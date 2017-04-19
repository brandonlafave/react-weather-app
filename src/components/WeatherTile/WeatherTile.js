import React, { Component } from 'react';
import './WeatherTile.css';

class WeatherTile extends Component {

	getDate(time) {
		// Converts timestamp returned from the API into milliseconds 
		let d = new Date(time * 1000)
		// Converts the Date object into a string that can be rendered to the UI
		let d2 = d.toString()
		// Removes hours, minutes, seconds, and timezone info from the date string
		return d2.substring(0, 15)
	}

	render() {

		let weatherTiles = this.props.forcast.map((day, index) => {
			return (
				<div className="WeatherTile" key={index}>
					<div className="margin-lr">
						<h2>{ this.getDate(day.time) }</h2>
					</div>
					<div className={ day.icon ? day.icon : 'default-icon' }></div>
					<p className="fs-small">{ day.summary }</p>
					<p className="fs-small">Low: <span className="fs-small">{ day.temperatureMin }˚</span></p>
					<p className="fs-small">High: <span className="fs-small">{ day.temperatureMax }˚</span></p>
				</div>
			);
		});

		return (
			<div className="WeatherTileContainer">
				{ weatherTiles }
		  	</div>
		);
	}
}

export default WeatherTile;
