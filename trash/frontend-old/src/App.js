import React, { Component } from "react";
import Product from "./Product.js";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
    }

    callAPI() {
        fetch("http://localhost:9000/getallproducts")
            .then(res => res.text())
            .then(res => {
              this.setState({ apiResponse: JSON.parse(res) })
              console.log(res)
              console.log(this.state.apiResponse);
            })
            .catch(err => err);
            
    }

    componentDidMount() {
      this.callAPI();
    }

    getFirstElementName() {

    }

    ListingProducts(){
      this.callAPI();
      const listItems = this.state.apiResponse.map(
        (product) => {
          return (
            <ol>
              <li>{product.name}</li>
            </ol>
          )
        }
      )
      return (
        <div>
          {listItems}
        </div>
      )
    }
  
    render() {
        return (
            <div className="App">
              <input type="text" placeholder="Search" value={this.state.value}/>
              <button type="button" className="btn">Search Now!</button>
              <button type="button" className="btn">Add to cart</button>
                <ul>
                {
                  this.state.apiResponse.map(product =>(
                    <Product product={product} />
                    
                    ))
                  
                }
                </ul>
            </div>
        );
    }
}

export default App;