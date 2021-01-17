class App extends React.Component {
    constructor(props) {
        super(props)
    this.state = {
        baseURL: ‘http://taco-randomizer.herokuapp.com/random/?full-tack=true',
        taco: ‘’
    }
    this.tacoType ()
}
    tacoType = () => {
        fetch(this.state.baseURL)
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    this.setState({
                        taco: json
                        // movieTitle: ''
                    }),
                    err => console.log(err)
                })
    }
    
        
    render() {
        console.log(this.state.taco);
    return (
            <div>
                <h2>Random Taco</h2>
                <h1>Shell: {this.state.taco.shell.name}</h1>
            </div>
        )
    }
}
// class MovieInfo extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Shell: {this.props.taco.shell}</h1>
//                 <h2>Year: {this.props.movie.Year}</h2>
//                 <img src={this.props.movie.Poster} alt={this.props.movie.Title} />
//                 <h3>Genre: {this.props.movie.Genre}</h3>
//                 <h4>Plot: {this.props.movie.Plot}</h4>
//             </div>
//         )
//     }
// }
ReactDOM.render(
    <App />, 
    document.querySelector('.container')
)















