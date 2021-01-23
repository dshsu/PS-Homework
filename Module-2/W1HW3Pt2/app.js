class App extends React.Component {
	state = {
		score: 0,
		category: '',
		points: null, // null to make sure the increase and decrease buttons don't break the display before the first clue is fetched
		prompt: '',
		answer: '',
		isRevealed: false
	}
//gets clue data
	getClue = () => { 
		fetch('http://jservice.io/api/random')
			.then((response) => {
				return response.json();
			}) //converts clue data to a manipulable format
			.then((json) => {
				const clue = json[0];
				console.log(clue);
				if (clue.invalid_count>0){
					this.getClue();
				} else {
				this.setState({ //assigns labels to clue information
					category: clue.category.title,
					points: Number(clue.value),
					prompt: clue.question,
					answer: clue.answer,
					isRevealed: false
				});
				}
			})
	}
//sets up functionality for gameplay - reveals answer and increases score
	revealAnswer = () => {
		this.setState({
			isRevealed: true
		});
	}

	changeScore = (amt) => {
		this.setState({
			score: this.state.score + amt
		});
	}
//displays the actual page
	render() {
		return (
			<div className='app'>
				<h1 className='title'> This Is Jeopardy!</h1>

				<h2> Score:{this.state.score}</h2>

				<div >
					<button id="decrease" onClick={() => this.changeScore(-this.state.points)}>Decrease</button>
					<button id="increase" onClick={() => this.changeScore(this.state.points)}>Increase</button>
					<button id="reset" onClick={() => this.changeScore(-this.state.score)}>Reset</button>
				</div>

				<h2 id="lets-play"> Let's Play! </h2>
				<button id="get-clue" onClick={this.getClue}> Get Clue </button>

				<h2> Category: {this.state.category} </h2>
				<h3> Points: {this.state.points} </h3>
				<h3> Clue: <p>{this.state.prompt}</p> </h3>

				<button id="reveal" onClick={this.revealAnswer}> Click to Reveal Answer </button>
				{this.state.isRevealed ? <h3>{this.state.answer}</h3>: null}
			</div>
			)
	}
}

ReactDOM.render(<App/>,document.getElementById('container'));