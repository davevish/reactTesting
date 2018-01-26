import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import "./Adventures.css";

class Adventures extends Component {
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
				<h1>Testing</h1>
			</Container>
		);
	}
}

export default Adventures;
