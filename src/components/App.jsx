import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';

class App extends React.Component {
  constructor (props) {
    super();
    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
    this.searchYouTube = props.searchYouTube;
    this.onVideoTitleClick = this.onVideoTitleClick.bind(this);
    this.onSearchInput = this.onSearchInput.bind(this);
    this.debouncedSearch = _.debounce(props.searchYouTube, 500, {trailing: true});
    this.updateVideos = this.updateVideos.bind(this);
  }

  updateVideos (videoList) {
    this.setState({
      videoList: videoList,
      currentVideo: videoList[0],
    }).bind(this);
  }

  componentDidMount () {
    this.searchYouTube({}, this.updateVideos);
  }

  onSearchInput (searchStr) {
    this.debouncedSearch({query: searchStr}, this.updateVideos);
  }

  onVideoTitleClick (video) {
    // event.preventDefault();
    // const videoId = event.target.id;
    // const video = exampleVideoData.filter((video) => {
    //   return video.id.videoId === videoId;
    // })[0];
    this.setState({
      currentVideo: video,
    });
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search onSearchInput={this.onSearchInput}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.currentVideo} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em><VideoList videos={this.state.videoList} onVideoTitleClick={this.onVideoTitleClick}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
