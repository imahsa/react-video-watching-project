 import React, {Component}  from 'react';
 import ReactDOM from 'react-dom';
 import SearchBar from './components/search_bar';
 import YTSearch from 'youtube-api-search';
 import VideoList from './components/video_list';
 import VideoDetails from './components/video_details'

const API_KEY = 'AIzaSyChm90GAnMBUbLokddviVjKes9-9ncDtIY'; 

class App extends Component {
	constructor(props){
		super(props);

		this.state = { videos: [] };
		
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
				this.setState({videos});
		});
	}		// ES16 syntax this.setState({videos: videos}), when key and property are in the same name
	render() {
		return(
 		<div>
 			<SearchBar />
 			<VideoDetails video={this.state.videos[0]} />
 			<VideoList videos={this.state.videos} />
 		</div>
 		);
	}		 
}

ReactDOM.render(
	<App />, 
	document.querySelector('.container') 
)