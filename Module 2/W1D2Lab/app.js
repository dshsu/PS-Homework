console.log("test");

class Receipt extends React.Component {
    render (){
        console.log(this.props)
        return(
            <div>
                <h1>{this.props.receipt.person}</h1>
            <ul>
            <li>Main: {this.props.receipt.order.main}</li> 
            <li>Protein: {this.props.receipt.order.protein}</li>
            <li>Rice: {this.props.receipt.order.rice}</li>
            <li>Sauce: {this.props.receipt.order.sauce}</li>
            <li>Drink: {this.props.receipt.order.drink}</li>
            <li>Cost: {this.props.receipt.order.cost}</li>
            </ul>
            </div>
        )
    }
}
class App extends React.Component {
    state = {
        receipts
    }
    render (){
        console.log(this.state);
        return(
            <div>
            {receipts.map( (receipt)=> }
            </div>  
        )
    }
}
//!receipt.paid ? <Receipt receipt={receipts}/> : "")
//ternary syntax
//condition ? if true do this : if false do this

//{!this.state.receipt2.paid ? <Receipt receipt={this.state.receipt2}/> : ""}
//{!this.state.receipt3.paid ? <Receipt receipt={this.state.receipt3}/> : ""} }*/ }
ReactDOM.render(
    <App />,
    document.querySelector('.container')
)