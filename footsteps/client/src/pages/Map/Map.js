import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {Container} from "../../components/Grid";
import API from "../../utils/API";
import "./Map.css";

class Map extends Component {
	state = {
		book: {}
	};

	componentDidMount() {
		API.getBook(this.props.match.params.id)
			.then(res => this.setState({ book: res.data }))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<Container fluid>
				<div id="map"> </div>
			</Container>
		);
	}
}

export default Map;
