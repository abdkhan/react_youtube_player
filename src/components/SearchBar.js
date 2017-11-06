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
					onChange={this.onInputChange.bind(this)}
				/>
			</div>
		);			
	}

	onInputChange(event) {
		this.setState({
			search: event.target.value
		});

		this.props.onSearchBarChange(event.target.value);
	}

}

export default SearchBar;