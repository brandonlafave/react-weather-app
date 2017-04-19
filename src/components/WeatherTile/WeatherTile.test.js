import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import WeatherTile from './WeatherTile';
import weatherTestData from '../../data/weatherTestData.json';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<WeatherTile forcast={weatherTestData} />, div);
});
