import React, { Component } from 'react';
import Sidebar from './SideBar';
import axios from 'axios';

class IncorrectImplementation extends Component {
	state = {
		open: false
	};
    
    componentDidMount = () => {
		axios({
			url: '/sidebar',
			method: 'get'
		}).then(res => {
			console.log(res);
			this.setState({
				...this.state,
				open: res.data.open === "true"
			});
		}).catch(err => console.log(err));
    };

	toggleState = () => {
		// if(this.props.history.location.pathname.indexOf("incorrect") > -1) {
			axios({
				url: '/sidebar',
				method: 'put',
				data : {
					open: !this.state.open
				}
			}).then(res => {
				console.log(res);
				this.setState({
					...this.state,
					open: res.data.open === "true"
				});
			}).catch(err => console.log(err));
		// }
	};

	render() {
		return (
			<Sidebar open={this.state.open} toggleOpen={this.toggleState} />
		);
	}
}

export default IncorrectImplementation;