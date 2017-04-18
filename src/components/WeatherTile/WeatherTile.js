import React, { Component } from 'react';
import './WeatherTile.css';

class WeatherTile extends Component {

	getDate(time) {
		let d = new Date(time * 1000)
		let d2 = d.toString()
		return d2.substring(0, 15)
	}

	render() {

		let weatherTiles = this.props.forcast.map((day, index) => {
			return (
				<div className="WeatherTile" key={index}>
					<h2>{ this.getDate(day.time) }</h2>
					
					<div className={ day.icon ? day.icon : 'default-icon' }></div>
					<div className="pull-right">
						<p>{day.summary}</p>
						<p>Low: {day.temperatureMin}˚</p>
						<p>High: {day.temperatureMax}˚</p>
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
