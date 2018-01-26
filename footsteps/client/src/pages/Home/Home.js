import React, { Component } from "react";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import {Container } from "../../components/Grid";
import "./Home.css";

class Home extends Component {
	state = {
	books: [],
	title: "",
	author: "",
	synopsis: ""
	};

//   loadBooks = () => {
//     API.getBooks()
//       .then(res =>
//         this.setState({ books: res.data, title: "", author: "", synopsis: "" })
//       )
//       .catch(err => console.log(err));
//   };
//
//   deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };
//
//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };
//
//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title && this.state.author) {
//       API.saveBook({
//         title: this.state.title,
//         author: this.state.author,
//         synopsis: this.state.synopsis
//       })
//         .then(res => this.loadBooks())
//         .catch(err => console.log(err));
//     }
//   };

	onSignIn(googleUser) {
		let profile = googleUser.getBasicProfile();
		console.log("ID: " + profile.getId());
		console.log('Full Name: ' + profile.getName());
		// console.log('Given Name: ' + profile.getGivenName());
		// console.log('Family Name: ' + profile.getFamilyName());
		// console.log("Image URL: " + profile.getImageUrl());
		// console.log("Email: " + profile.getEmail());

		// The ID token you need to pass to your backend:
		let id_token = googleUser.getAuthResponse().id_token;
		console.log("ID Token: " + id_token);
	}

	// signOut() {
	// 	let auth2 = gapi.auth2.getAuthInstance();
	// 	auth2.signOut().then(function () {
	// 		console.log('User signed out.');
	// 	});
	// }

	render() {
		return (
			<Container fluid>
				{/*<img src="../../images/bharath-suresh-388435.jpg"/>*/}

				<h1>Footsteps</h1>

				<h4>A new way to interact with your surroundings!</h4>

				<div className="row col-centered" id="google">
					<div className="g-signin2" id="google" data-onsuccess="onSignIn" data-theme="dark">Signin</div>
				</div>
			</Container>
		);
	}
}

export default Home;
