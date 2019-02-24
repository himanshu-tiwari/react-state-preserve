import React, { Component } from 'react';
import Sidebar from './SideBar';

class BubblingImplementation extends Component {
	state = {
		open: false
    };

	toggleState = () => {
		this.setState({
			...this.state,
			open: !this.state.open
		});
	};

	render() {
		return (
            <div onClick={() => this.setState({
                ...this.state,
                open: true
            })}>
			    <Sidebar open={this.state.open} toggleOpen={this.toggleState} />
            </div>
		);
	}
}

export default BubblingImplementation;