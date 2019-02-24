import React, { Component } from 'react';
import CorrectImplementation from './Components/CorrectImplementation';
import IncorrectImplementation from './Components/IncorrectImplementation';
import BubblingImplementation from './Components/BubblingImplementation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={CorrectImplementation} />

						<Route exact path='/incorrect' component={IncorrectImplementation} />
						
						<Route exact path='/bubbling' component={BubblingImplementation} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
