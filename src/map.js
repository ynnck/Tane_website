import React from "react";
import { VectorMap } from "react-jvectormap";
import data from "./data/coffee.json";
const { getCode } = require("country-list");

class Map extends React.Component {
    state = {
	countriesCodesArray: [...new Set(data.map(item => getCode(item.country)))],
	countriesNamesArray: [...new Set(data.map(item => item.country))],
	countriesMarkersArray: [...new Set(data.map(function (item) {return {latLng: [item.lng, item.lat], name: item.country + ": " + item.producer}}))]
    };

    render() {
	console.log(this.state);
        return (
	    <div>
		<div class="coffeeListDiv">Coffees of the moment:</div>

            <VectorMap
            map={"world_mill"}
            backgroundColor="transparent" // change it to ocean blue: #0077be
            zoomOnScroll={false}
	    zoomAnimate={false}
	    regionsSelectable={false}
	    panOnDrag={false}
	    zoomButtons={false}
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
                        fill:  "var(--fontColor)" // color for the clicked country
                    },
	    }}
	    onRegionTipShow={function (e, el, code) {
            e.preventDefault();
	    }}	
    	    onMarkerTipShow={function (e, el, code) {
            e.preventDefault();
	    }}

	    selectedRegions={this.state.countriesCodesArray}
	    markers={this.state.countriesMarkersArray}
	    labels={{
        	markers: {
			render: index => this.state.countriesMarkersArray[index].name
		}}
		    }
            />
                       </div>
        );
    }
}

export default Map;

