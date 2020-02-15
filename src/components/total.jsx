import React, { Fragment, PureComponent } from 'react';
import '../App.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class Total extends PureComponent {
  constructor(props) {
    super(props);
    this.checkout = this.checkout.bind(this);

  }

  checkout() {
    let total = this.props.total
    // alert('Total price is: '+total+'<br/> Thanks for shopping with us');

    confirmAlert({
      customUI: ({ onClose }) => {
        return (

          <div className='custom-ui'>
            <button
              onClick={() => {

                onClose();

              }}>X</button>
            <h1>Total Price is: Rs. {total}</h1>
            <h2>Transaction successful</h2>

          </div>

        );
      }
    });
  }
  render() {

    let total = this.props.total
    let qty = this.props.qty
    console.log('qty in render total', qty);



    let mystyle = {
      borderTop: "1px solid #ddd",
      marginTop: "10px"
    };
    return (
      <Fragment>
        <div className="footer">
          <h3 className="row" >
            <span className="col-6">Qty:</span>
            <span className="col-6 text-right">{qty}</span>
          </h3>
          <h3 className="row" >
            <span className="col-6">Total:</span>
            <span className="col-6 text-right">{total}</span>
          </h3>


          <button className="btn btn-outline-primary" onClick={this.checkout}>
            Checkout
        </button>
        </div>


      </Fragment>
    );
  }
}
export default Total;