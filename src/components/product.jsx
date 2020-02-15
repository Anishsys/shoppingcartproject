import React, { Fragment, PureComponent } from 'react';
import '../App.css';
import Total from './total';
import ProductListdet from './productListdet';

class Product extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);

  }

  add() {
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.handleTotal(this.props.price);
    console.log('this.state.qty', this.state.qty)
    this.props.displayqty(this.state.qty);
  }

  subtract() {
    this.setState({
      qty: this.state.qty - 1
    });
    this.props.handleTotal(-this.props.price);
    this.props.displayqtyminus(-this.state.qty);

  }


  render() {
    const { qty } = this.state;
    console.log('qty in product render', qty)
    let mystyleprod = {
      display: "block"
    };
    return (
      <Fragment>

        <div className="product">
          <div className="product-image">
            <img src={this.props.imgurl} alt="prodimg" />
            <div className="offertext">
               <p>{this.props.offertxt}</p>
            </div>  
          </div>
          <div className="product-details">
            <h3 className="product-title">{this.props.brandname}</h3>
            <p className="product-description">{this.props.prodname}</p>
            <p className="product-quantity"> {this.props.quantity} </p>
            <p className="product-mrp"> MRP {this.props.mrp} </p>
            <p className="product-price">Rs. {this.props.price}</p>
            <button className="btn btn-outline-primary btncart" onClick={this.add}> Add to Cart </button>
            <button className="btn btn-outline-primary btnqty" onClick={this.add}> + </button>
            <span>{this.state.qty} </span>
            <button className="btn btn-outline-primary btnqty" onClick={this.subtract} disabled={this.state.qty < 1}> - </button> 

              
          </div>

        </div>

  

      </Fragment>
    );
  }
}

export default Product;
