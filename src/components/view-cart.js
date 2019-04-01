import { connect } from 'react-redux'
import { When, Unless } from './conditional';
import React, { Component } from 'react'
import * as actions from '../redux/actions';
import PaypalExpressBtn from 'react-paypal-express-checkout';
// import { Link } from "gatsby";

import '../components/design/view-cart.scss'

class ViewCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0.00,
      paymentSuccess: false,
    }
  }

  /////////////////// Totaling the Cart Items ///////////////

  componentDidMount() {
    this.calculateCartTotal()
  }
  ///////////////////////////// Render ///////////////////////

  calculateCartTotal = () => {
    let total = 0;
    this.props.cart.forEach(item => {
      total = total + item.price;
    });
    console.log(' 💎 ', total);
    this.setState({ total });
  }

  // componentDidUpdate() {
  //   console.log('cart is updating now lol')
  //   this.calculateCartTotal()
  // }

  deleteCartItem = async id => {
    await this.props.deleteCartItem(id);
    this.calculateCartTotal()
  }




  renderCart = () => {
    if (this.props.cart.length <= 0) {
      return <div>Nothing in your cart!</div>
    }

    return this.props.cart.map(item => (
      <div className='singleCartItem'>
        <div>{item.name}</div>
        {console.log(item)}
        <div>${item.price}.00  <span onClick={() => this.deleteCartItem(item.id)} style={{ marginLeft: '15px', color: 'red' }}>&times;</span></div>

        {/* {item.name}: {item.price} */}
      </div>
    ))
  }


  render() {
    const onSuccess = (payment) => {
      console.log(' 🛒 ');
      this.props.clearCart();
      this.setState({ paymentSuccess: true });
    }

    const onCancel = (data) => {
      console.log('The payment was cancelled!', data);
    }

    const onError = (err) => {
      console.log("Error!", err);
      // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
      // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    }

    let env = 'sandbox'; // you can set here to 'production' for production
    let currency = 'USD'; // or you can set this value from your props or state
    let total = this.state.total; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    const client = {
      sandbox: 'ARwR7UK7bLKKQWRUL0GgChWNuAFBMBzAMfFQ_yWoxy3AATOd6EUmz3OdS_6EVXpIqq74W8_Ahcwk_DAZ',
      production: 'YOUR-PRODUCTION-APP-ID',
    }

    return (
      <React.Fragment>



        <Unless condition={this.state.paymentSuccess}>
          <div className='cart'>
            <h2>Your Shopping Cart</h2>
            <div className='cartContainer'>
              {this.renderCart()}
            </div>


            {this.props.cart.length > 0 && (
              <div>

                <h4>Total ${this.state.total}.00 </h4>
                <PaypalExpressBtn
                  env={env}
                  client={client}
                  currency={currency}
                  total={total}
                  onError={onError}
                  onSuccess={onSuccess}
                  onCancel={onCancel}
                />
              </div>
            )}
          </div>
        </ Unless>

        <When condition={this.state.paymentSuccess}>
          <h1> Thanks for shopping at Bazaar! </h1>

        </When>


        {/* pass card totals, cardlist  */}
        {/* maybe add clearCart={true} as props */}
      </React.Fragment>
    )
  }
}



const mapStateToProps = state => ({
  cart: state.data.cart
});

const mapDispatchToProps = (dispatch, getState) => ({
  updateCart: id => dispatch(actions.updateCart(id)),
  clearCart: () => dispatch(actions.clearCart()),
  deleteCartItem: id => dispatch(actions.deleteCartItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewCart);
