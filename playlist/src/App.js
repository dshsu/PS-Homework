import React,{Component} from 'react';
import playlists from './data.js';
console.log(playlists);

class App extends Component{
  constructor(){
    super()
    this.state={
      playlists:playlists,
      title:'',
      artist:'',
      time:''
    }
  }
  handleChange = (e) => {
    this.setState({[e.target.id]:e.target.value})
    // this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const newSong = {
      title:this.state.title,
      artist:this.state.artist,
      time: this.state.time
    }

  const newSongArray = [newSong, ...this.state.playlists.songs]
  this.setState({
    playlists:{
      created:this.state.playists.created,
      title:this.state.playlists.title,
      songs:newSongArray
    },
    title:'',
    artist:'',
    time:''
  })
}
  render(){
    return(
      <div className = "tunr-container">
        <div className = 'playlist'>
          <header>
            <h1>Not-Spotify</h1>
          </header>
          <h1>
            {this.state.playlists.title}
          </h1>
          <div className = 'songs'>
            {this.state.playlists.songs.map((song,index) =>{
              console.log(song);
              console.log(index);
              return(
              <div className='song' key={index}>
                <h1>{song.title}</h1>
                <h2>{song.artist}</h2>
                <h3>{song.time}</h3>
                </div>
              )}
            )}
            </div>
            </div>
            <form onSubmit = {this.handleSubmit}>
              <label htmlForm = 'title'>title</label>
              <input type = 'text' value={this.state.title} onChange = {this.handleChange} id = 'title'/>
              <label htmlForm = 'artist'>artist</label>
              <input type = 'text' value={this.state.artist} onChange = {this.handleChange} id = 'artist'/>
              <label htmlForm = 'time'>time</label>
              <input type = 'text' value={this.state.time} onChange = {this.handleChange} id = 'time'/>
              <input type = 'submit' value = 'add new song'/>
            </form>
      </div>
    );
  }
}
export default App;