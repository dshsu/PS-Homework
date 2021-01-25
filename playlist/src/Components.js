class Playlist extends Component{
    constructor(){
      super()
      this.state={
        playlists:playlists,
        title:'',
        artist:'',
        time:''
      }
    }
    render(){
      return[
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
              </div>
      ]}
                }