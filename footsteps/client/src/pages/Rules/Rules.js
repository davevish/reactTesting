import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import "./Rules.css";

class Rules extends Component {
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
		  <div className="container col-12-sm">
			  <div className="jumbotron">
				  <h1>Rules!</h1>
				  <p>Rule 1</p>
				  <p>Rule 2</p>
				  <p>Rule 3</p>
				  <p>Rule 4</p>
				  <p>Rule 5</p>
				  <p><a className="btn btn-primary btn-lg" role="button">Next</a></p>
			  </div>
		  </div>

		  <nav id="footer" className="navbar navbar-default navbar-fixed-bottom">
			  <div className="container">
				  <a id="signout" href="/">Sign out</a>
			  </div>
		  </nav>
      </Container>
    );
  }
}

export default Rules;
