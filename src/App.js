import React from 'react';
import {Grid} from '@material-ui/core';
import {SearchBar, VideoDetail, VideoList} from './components';
// import {VideoList} from './components/VideoList';
import youtube from './api/youtube';

class App extends React.Component{
  state = {
    videos:[],
    selectedvideo: null,
  }
  componentDidMount(){
    this.handleSubmit('js mastery')
  }
  onVideoSelect = (video) =>{
    this.setState({selectedvideo:video})
  }

  handleSubmit = async(searchTerm) => {
    const response = await youtube.get('search', 
    {
      params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyCHNuAyOcS1ocOv-XAw_jLQuYzpcIkk5ao',
        q: searchTerm
    }});
    this.setState({videos: response.data.items, selectedvideo: response.data.items[0]});
    //console.log(response.data.items);
  }

  render(){
    const {selectedvideo, videos} = this.state;
    return (
      <Grid justify="center" container spacing={2}> 
        <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                 <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={8} spacing={8}>
                <VideoDetail video={selectedvideo} />
              </Grid>
              <Grid item xs={3}>
                 <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
              </Grid>
            </Grid>
        </Grid>
      </Grid>
    );
  }
}



// const App = () =>{
//   return(
//     <h1>youtube App</h1>
//   )
// }


export default App;