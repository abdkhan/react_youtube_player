import React, { Component } from 'react';

class SearchBar extends Component {

	constructor(props){
		super(props)

		this.state = {
			search: ''
		};
	}
	
	render() {
		return (
			<div className="search-bar">
				<input classtype="text" 
					value={this.state.search}
					onChange={this.handleChange.bind(this)}
				/>
			</div>
		);			
	}

	handleChange(event) {
		console.log()

		this.setState({
			search: event.target.value
		});
	}
	
}

export default SearchBar;