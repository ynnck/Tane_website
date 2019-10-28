import React from "react";
import { VectorMap } from "react-jvectormap";
const { getName } = require("country-list");

class Map extends React.Component {
    state = {
        countriesCodesArray: [],
        countriesNamesArray: [],
        data: {},
        title: "",
        titleSet: false,
        color: "#48aeef"
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
            containerStyle={{
                width: "100%",
                height: "520px"
            }}
            onRegionClick={this.handleClick} // gets the country code
            containerClassName="map"
            regionStyle={{
                initial: {
                    fill: "#e4e4e4",
                        "fill-opacity": 0.9,
                        stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 0
                },
                    selected: {
                        fill: "#2938bc" // color for the clicked country
                    },
            }}
            regionsSelectable={false}
            series={{
                regions: [
                    {
                        values: this.state.data, // this is the map data
                        scale: ["#146804", color], // your color game's here
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
