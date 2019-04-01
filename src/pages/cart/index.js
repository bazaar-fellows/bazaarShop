import React, { Component } from 'react'

import { Provider } from "react-redux";
import { store } from '../index.js';
import ViewCart from '../../components/view-cart.js';
import Layout from '../../components/layout';
import Background from '../../components/background';

import '../../components/design/view-cart.scss';

class Cart extends Component {
  render() {
    return (
      <Provider store={store} >
        <Layout>
          <Background />
          <div className='main-cart-container'>
            <ViewCart />

          </div>
        </Layout>
      </Provider>

    )
  }
}

export default Cart


