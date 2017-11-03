import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends Component {

	renderVideoItems() {
		return this.props.videos.map((video) => {
			return <VideoListItem onVideoSelect={this.props.onVideoSelect} key={video.etag} video={video} />;
		})
	}

	render() {
		console.log(this.props.videos)
		return (
			<ul className="col-md-4 list-group">
				{this.renderVideoItems()}
			</ul>
		);
	}
}

export default VideoList;