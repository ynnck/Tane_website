import React from "react";

class Overlay extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            style : {
		    width : "50hmin"
            }
        };
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }
    componentDidMount() {
        document.addEventListener("click", this.closeNav);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.closeNav);
    }

    openNav() {
	document.addEventListener("click", this.closeNav);
    }

    closeNav() {
    }

	render(){
	return(<dialog>{this.props.data.price}</dialog>)
	};

};
export default Overlay;
