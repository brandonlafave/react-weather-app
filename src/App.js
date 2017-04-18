import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import logo from './logo.svg';
import config from './config.json';
import './App.css';
import WeatherTile from './components/WeatherTile/WeatherTile';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dailyForcast: []
		};
	}

	componentDidMount() {
		this.getData();
	}

	getData() {
		fetchJsonp('https://api.darksky.net/forecast/' + config.API_KEY + '/37.8267,-122.4233')
		.then((res) => res.json())
		.then(res => {
			this.setState({ dailyForcast: res.daily.data})
			console.log(res.daily.data)
		})
		.catch( er => {
			console.log('There was an error with the repsonse')
		});
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
			  		<img src={logo} className="App-logo" alt="logo" />
			  		<h2>Welcome to React</h2>
				</div>
				<WeatherTile forcast={this.state.dailyForcast} />
				<footer>
					<a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
				</footer>
		  	</div>
		);
	}
}

export default App;
