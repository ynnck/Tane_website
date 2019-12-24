import React from 'react';
import './App.css';
import CoffeeMap from './map.js';
import Overlay from './overlay.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import data from "./data/coffee.json";
const { getCode } = require("country-list");

function App() {
	let coffeeData = {
	countriesCodesArray: [...new Set(data.map(item => getCode(item.country)))],
	countriesNamesArray: [...new Set(data.map(item => item.country))],
	countriesMarkersArray: [...new Set(data.map(function (item) {return {latLng: [item.lng, item.lat], name: item.country + ": " + item.producer}}))],
	};
	let coffeeSelected = {};
    let returnSelectedCoffee = (dataFromChild) => {
        coffeeSelected = data[dataFromChild];
        console.log(coffeeSelected)
	}

	return (
    <div className="App">
            <header className="App-header">
                <p>Tane roasters collective</p>
	</header>
        <Overlay data={coffeeSelected}/>
        <CoffeeMap data={coffeeData} callbackFromParent={returnSelectedCoffee}/>  
        <footer className="App-footer">
			<div id="socialMediaButtons">
				<a href="https://www.youtube.com/" className="social"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
				<a href="https://www.twitter.com/" className="social"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
				<a href="https://www.instagram.com/" className="social"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
			</div>
            </footer>
        </div>
    );
}

export default App;
