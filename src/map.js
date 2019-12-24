import React from "react";
import { VectorMap } from "react-jvectormap";


class Map extends React.Component {

	selectMarker = (event, code) => {this.props.callbackFromParent(code)}
	

	render() {
	       console.log(this.props.data);
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

	    selectedRegions={this.props.data.countriesCodesArray}
	    markers={this.props.data.countriesMarkersArray}
	    labels={{
        	markers: {
			render: index => this.props.data.countriesMarkersArray[index].name
		}}
		    }
	    onMarkerClick={this.selectMarker}
            />
                       </div>
        );
    }
}

export default Map;

