import React, { Component } from 'react';
import Sidebar from './SideBar';

class CorrectImplementation extends Component {
	state = {
		open: false
    };
    
    componentDidMount = () => {
        this.setState({
            ...this.state,
            open: localStorage.getItem('sidebar') === "true"
        });
    };

	toggleState = () => {
		this.setState({
			...this.state,
			open: !this.state.open
		}, () => {
            localStorage.setItem('sidebar', this.state.open);
        });
	};

	render() {
		return (
			<Sidebar open={this.state.open} toggleOpen={this.toggleState} />
		);
	}
}

export default CorrectImplementation;