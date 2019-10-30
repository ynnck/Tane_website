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

    render() {
	    // console.log(this.state.data);
	const { countriesNamesArray, color } = this.state;
        return (
	    <div>
		    <div class="coffeeListDiv">Our coffees at the moment:<ul class="coffeeListUl"> 
            	{countriesNamesArray.map((country, i) => (
               	<li key={i}>{country}</li>
		))}</ul>
            </div>

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
	    selectedRegions={[... new Set(data.map(item => getCode(item.country)))]}
            />
                       </div>
        );
    }
}

export default Map;

