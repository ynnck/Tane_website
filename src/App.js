import React from 'react';
import logo from './logo.svg';
import './App.css';
import CoffeeMap from './map.js';
import coffeeList from './list.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Tane roasters collective</p>
            </header>
            
            <CoffeeMap />  
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
