//You visualize a dashboard with components for 
//reviews, average rating, sentiment analysis and website visitors
class App extends React.Component{
    render(){
      return(
        <div id='wrapper'>
        <Dash />
        <Reviews />
        <AvgRating />
        <SentAnalysis />
        <Visitors />
        </div>
      )
    }
  }
class Dash extends React.Component{
    render(){
        return(
            <div id="module">
                <dash>
                <h3>Dashboard</h3>
                <h3>Widget</h3>
                <h3>Reviews</h3>
                <h3>Customers</h3>
                <h3>Online Analysis</h3>
                <h3>Settings</h3>
                </dash>
            </div>
        )
    }   
}
class Reviews extends React.Component{
    render(){
        return(
            <div id="module">
                <review>
                <h3>Reviews</h3> 
                <p>1,281</p>  
                </review>
            </div>
        )    
    }
}

class SentAnalysis extends React.Component{
    render(){
        return(
            <div id="module">
                <analysis>
                <h3>Sentiment Analysis</h3>  
                <p>960</p>
                <p>122</p>
                <p>321</p>
                </analysis>
            </div>            
        )    
    }
}
class AvgRating extends React.Component{
    render(){
        return(
            <div id="module">
                <rating>
                 <h3>Average Rating</h3>  
                <p>4.6</p>
                </rating>
             </div>
            
        )    
    }
}
class Visitors extends React.Component{
    render(){
        return(
            <div id="module">
                <visitors>
                    <h3>Number of Visitors</h3>
                    <p>821</p>
                    </visitors>
            </div>
           
        )    
    }
}
ReactDOM.render(
<App />, document.querySelector('.container'));
