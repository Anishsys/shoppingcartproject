import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import ProductListdet from './components/productListdet';
import Product from './components/product';
import Total from './components/total';

class App extends Component {

  constructor(props) {
    super(props);
   
  }




  render() {
    return (



      <Router>

    
        <div className="App">



          {/* <Total/>
          <Product/> */}

          <ProductListdet />




        </div>

      </Router>




    );
  }

}
export default App;
