class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currVideo: null,
      videoList: null,
      timeout: true,
    };
  }
  updateCurrVideo(video) {
    this.setState({
      currVideo: video });
  }
  //function that initializes app by calling props.searchyoutube
  componentDidMount() {
  //this function passes in the callback function searchyoutube uses
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: 'dogs', max: 5}, this.updateVideoList.bind(this));

  //the callbackfunction is update the state of video list
  }
  updateVideoList(videoList) {
    this.setState({
      videoList: videoList
    });
    if (this.state.currVideo === null) {
      this.setState({
        currVideo: videoList[0] });
    }
  }
  search(term) {
    if (this.state.timeout === true) {
      this.setState({
        'timeout': false
      });
      this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: term, max: 10}, this.updateVideoList.bind(this));
      setTimeout(() => this.setState({timeout: true}), 500);
    }
  }
  render() {
    // this.addEventListener('click', this.updateCurrVideo.bind(this));
    if ( !this.state.currVideo ) {
      // return (
      //   <div>
      //     <Nav search={this.search.bind(this)}/>
      //     <div className="col-md-7">
      //       <VideoPlayer />
      //     </div>
      //     <div className="col-md-5">
      //       <VideoList />
      //     </div>
      //   </div>
      // );
      // Note that you can return false it you want nothing to be put in the dom
      // This is also your chance to render a spinner or something...
      return (<div>The responses are not here yet!</div>);
    } else {
      return (
        <div>
          <Nav search={this.search.bind(this)}/>
          <div className="col-md-7">
            <VideoPlayer video={this.state.currVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} play={this.updateCurrVideo.bind(this)}/>
          </div>
        </div>
      );
    }
  }
}

// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={window.exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={window.exampleVideoData}/>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
