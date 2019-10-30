import React from "react";
import { VectorMap } from "react-jvectormap";
import data from "./data/coffee.json";
const { getName, getCode } = require("country-list");

class Map extends React.Component {
    state = {
	countriesCodesArray: [... new Set(data.map(item => getCode(item.country)))],
        countriesNamesArray: [... new Set(data.map(item => item.country))],
        data: {},
        color: "#da4032"
    };

    handleClick = (e, countryCode) => {
        const { countriesCodesArray } = this.state;
        // console.log(countryCode);
        if (countriesCodesArray.indexOf(countryCode) === -1) {
            this.setState(
                {
                    countriesCodesArray: [...countriesCodesArray, countryCode]
                },
                () => this.getCountriesNamesList()
            );
        }
    };

    getCountriesNamesList = () => {
        const { countriesCodesArray } = this.state;
        const list = countriesCodesArray.map(code => getName(code));
        this.setState(
            {
                countriesNamesArray: list
            },
            () => this.makeMapDataStructure()
        );
    };

    makeMapDataStructure = () => {
	const { countriesCodesArray } = this.state;
	console.log(this.state);
        let obj = {};
        //{CN: 5, MX: 5, TX: 5}
        countriesCodesArray.forEach(countryCode => (obj[countryCode] = 5));
        this.setState({
            data: obj
        });
    };

    render() {
	    // console.log(this.state.data);
	const { countriesNamesArray, color } = this.state;
        return (
            <div>
            <VectorMap
            map={"world_mill"}
            backgroundColor="transparent" // change it to ocean blue: #0077be
            zoomOnScroll={false}
            zoomAnimate={false}
            focusOn={{
                x: 0.5,
                y: 0.65,
                scale: 2.5,
                animate: true
                }}
            containerStyle={{
                width: "100vw",
                height: "50vh"
            }}
            onRegionClick={this.handleClick} // gets the country code
            containerClassName="map"
            regionStyle={{
                initial: {
                    fill: "var(--bgColorLight)",
                        "fill-opacity": 0.9,
                        stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 0
                },
                    selected: {
                        fill:  "#da4032" // color for the clicked country
                    },
            }}
            regionsSelectable={false}
	    series={
		{
                regions: [
                    {
                        values: this.state.data, // this is the map data
                        scale: ["#da4032", color], // your color game's here
                        normalizeFunction: "polynomial"
                    }
                ]
		}}
	    
            />
            <div>
            {countriesNamesArray.map((country, i) => (
                <div key={i}>{country}</div>
            ))}
            </div>
            </div>
        );
    }
}

export default Map;

