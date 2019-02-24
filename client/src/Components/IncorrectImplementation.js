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

	toggleState = (close) => {
		if(close) {
			axios({
				url: '/sidebar',
				method: 'put',
				data : {
					open: false
				}
			}).then(res => {
				this.setState({
					...this.state,
					open: res.data.open === "true"
				});
			}).catch(err => console.log(err));
		} else {
			axios({
				url: '/sidebar',
				method: 'put',
				data : {
					open: !this.state.open
				}
			}).then(res => {
				this.setState({
					...this.state,
					open: res.data.open === "true"
				});
			}).catch(err => console.log(err));
		}
	};

	render() {
		return (
			<Sidebar open={this.state.open} toggleOpen={this.toggleState} />
		);
	}
}

export default IncorrectImplementation;