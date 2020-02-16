import React, { Fragment, PureComponent } from 'react';
import '../App.css';
import Product from './product';
import Total from './total';
//import { products } from "../config.json";

class ProductListdet extends PureComponent {
  constructor(props) {
    super(props);
    console.log("----------------------------------------", this.props);
    this.state = {
      total: 0,
      qty: 0,
      // productList: ""

      productList: [],
      products: []
    };

    // this.createProduct = this.createProduct.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);

    this.showqty = this.showqty.bind(this);
    this.showqtyminus = this.showqtyminus.bind(this);
  }
  componentDidMount() {
    fetch(`./config.json`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }

    })
      .then(response => response.json())

      .then(data => this.setState({ products: data.products }));

  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ productList: productList });
  //   }, 1000);
  // }

  // createProduct(product) {
  //   this.setState({
  //     products: this.state.productList.push(product)
  //   });
  // }

  calculateTotal(price) {
    this.setState({
      total: this.state.total + price
    });
    console.log(this.state.total);
  }


  showqty(qty) {
    this.setState({
      qty: this.state.qty + 1
    });
    console.log('showqtyshowqty in productdetlist', qty);
  }
  showqtyminus(qty) {
    this.setState({
      qty: this.state.qty - 1
    });
    console.log('showqtyshowqty in productdetlist minus', qty);
  }
  render() {

    // const resArr = this.state.products.map((r, i)=> {
    //   return (<li key={i}>
    //     {r.name}

    //   </li>
    //   )
    //   console.log('resArr in render', r.name)
    // }) 
    // let qty  = this.props.qty
    // console.log('qty in render productlistdet', qty);
    const { qty } = this.state;
    console.log('qty in priductlistdet render', qty)
    if (!this.state.products) return <p>loading...!!!!</p>;

    var component = this;
    var productsdet = this.state.products.map(function (product) {
      return (


        <Product
          brandname={product.brandname}
          prodname={product.prodname}
          quantity={product.quantity}
          price={product.price}
          mrp={product.mrp}
          imgurl={product.imgurl}
          offertxt={product.offertxt}

          handleTotal={component.calculateTotal}
          displayqty={component.showqty}
          displayqtyminus={component.showqtyminus}
        // qty = {qty}

        />
      );
    });

    return (
      <Fragment>
       
        <div class="shopping-cart">
          {productsdet}
          <Total total={this.state.total} qty={this.state.qty} />
        </div>
        <p className="footercpy">Shopping Carts</p>
      </Fragment>
    );
  }
}
export default ProductListdet;
