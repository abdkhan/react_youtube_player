import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';


const YOUTUBE_API_KEY = 'AIzaSyDE_shus30PLJmIwmfZTMKBTNOxT5auOwg';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('bigdawstv');
		
	}

	videoSearch(searchText) {
		YTSearch({ key: YOUTUBE_API_KEY, term: searchText }, videos => {
			this.setState({ 
				videos,
				selectedVideo: videos[0]
			});
		});
	}


	render() {
		const videoSearch = _.debounce((term) => this.videoSearch(term), 700);
		return (
			<div>				
				<SearchBar onSearchBarChange={videoSearch}/>
				<VideoDetails video={this.state.selectedVideo}/>
				<VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
