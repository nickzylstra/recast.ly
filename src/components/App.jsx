import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
    this.onVideoTitleClick = this.onVideoTitleClick.bind(this);
    searchYouTube({
      query: '',
      max: 10,
    });

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
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em></h5><VideoPlayer video={this.state.currentVideo} /></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em></h5><VideoList videos={this.state.videoList} onVideoTitleClick={this.onVideoTitleClick}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
