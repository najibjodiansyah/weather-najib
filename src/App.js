/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import axios from "axios";

function App() {
	const [data, setData] = useState({});
	const [location, setLocation] = useState("Bogor");

	const api_key = "519b8b47c0482f883b927a22b3988573";

	const uri = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${api_key}`;

	const searchLocation = () => {
		if (event.key === "Enter") {
			axios.get(uri).then((response) => {
				setData(response.data);
				console.log(response.data);
			});
			setLocation("");
		}
	};

	return (
		<div className="app">
			<div className="search">
				<input
					valuue={location}
					onChange={(event) => setLocation(event.target.value)}
					onKeyPress={searchLocation}
					placeholder="Enter Location"
					type="text"
				/>
			</div>
			<div className="container">
				<div className="top">
					<h2>Hi Najib</h2>
					<div className="location">
						{data.main ? (
							<p>
								You are in <span className="bold">{data.name}</span>
							</p>
						) : (
							<p>Please, Enter a location</p>
						)}
					</div>
					<div className="temp">
						{data.main ? <h1>{data.main.temp.toFixed()}˚F</h1> : null}
					</div>
					<div className="description">
						<p>
							{data.weather ? (
								<p>
									Where have{" "}
									<span className="bold">{data.weather[0].description}</span>
								</p>
							) : null}
						</p>
					</div>
				</div>

				{data.main !== undefined && (
					<div className="bottom">
						<div className="feels">
							{data.main ? (
								<p className="bold">{data.main.feels_like.toFixed()}˚F</p>
							) : null}
							<p>Feels Like</p>
						</div>
						<div className="humidity">
							{data.main ? <p className="bold">{data.main.humidity}%</p> : null}
							<p>Humidity</p>
						</div>
						<div className="wind">
							{data.wind ? (
								<p className="bold">{data.wind.speed.toFixed()} MPH</p>
							) : null}
							<p>Wind Speed</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
