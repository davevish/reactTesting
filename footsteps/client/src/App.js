import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules/index";
import Contact from "./pages/Contact/index";
import Adventures from "./pages/Adventures/index";
import Map from "./pages/Map/index";
import Task from "./pages/Task/index";
// import Well from "./components/Well";

import Footer from "./components/Footer";
import Nav from "./components/Nav";

const App = () =>
	<Router>
		<div>
			<Nav />

			<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/Home" component={Home} />
			<Route exact path="/Rules" component={Rules} />
			<Route exact path="/Adventures" component={Adventures} />
			<Route exact path="/Map" component={Map} />
			<Route exact path="/Task" component={Task} />
			<Route exact path="/Contact" component={Contact} />

			</Switch>

			<Footer />
		</div>
	</Router>;

export default App;
