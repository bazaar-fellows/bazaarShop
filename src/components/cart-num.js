import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions';


class CartNum extends Component {
  render() {
    return (
      <div className="cartNum">
        {this.props.cart.length}
      </div>
    )
  }
}

//hi
const mapStateToProps = state => ({
  cart: state.data.cart
});

const mapDispatchToProps = (dispatch, getState) => ({
  updateCart: id => dispatch(actions.updateCart(id)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartNum);
