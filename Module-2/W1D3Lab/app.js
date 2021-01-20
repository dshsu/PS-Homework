ReactDOM.render(
    <App />,
    document.querySelector('.container')
)

class App extends React.Component {
    render (){
        return(
            <div>
            
            </div>  
        )
    }
}
class App extends React.Component {
    tardis = {
   name: 'Time and Relative Dimension in Space',
   caps: false,
 }
 changeIt = (text) => {
   if (this.state.tardis.caps) {
     this.setState({
       tardis: {
         name: text.toLowerCase(),
         caps: false
       }
     })
   } else {
     this.setState({
       tardis: {
         name: text.toUpperCase(),
         caps: true
       }
     })
   }
 }
 
   render() {
       return(
           <div>
              <DivOne />
           </div>
       )
   }
 }
 