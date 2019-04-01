import React, { Component } from 'react';
import Modal from 'react-modal';
import Auth from '../auth/auth';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import './design/modal.scss';
import './design/card.scss';


import DeleteProduct from '../components/apollo/delete-products.js';
import { timeout } from 'q';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};


export class Card extends Component {
  state = {
    modalVisible: false,
    added: false
  };

  setModalVisible(visible) {
    console.log('firing');

    this.setState({ modalVisible: visible });
  }

  editItem = (id) => {
    //edit the item
  }

  deleteItem = (id) => {
    console.log('my props content❤️', this.props.content);

  }

  addToCart = () => {
    const { name, price, description, _id } = this.props.content
    this.props.updateCart(_id, name, price, description);
    this.setState({ added: true }, () => {
      setTimeout(() => {
        this.setState({ modalVisible: false, added: false })
      }, 1000);
    });

  }


  render() {
    return (
      <div className="card">
        <h5>{this.props.content.name}</h5>
        <img alt='product' src={this.props.content.description} style={{ width: "200px", height: '200px' }} />
        <div className='price-btn-container'>
          <div>${this.props.content.price}.00</div>
          <button onClick={() => this.setModalVisible(!this.state.modalVisible)}>Learn More</button>
        </div>
        <Auth capibility="delete">
          <DeleteProduct productId={this.props.content._id} productName={this.props.content.name} />
        </Auth>


        <Modal
          className="Modal"
          overlayClassName="background-over-lay"
          isOpen={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
          style={customStyles}
          contentLabel="Example Modal"
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
        >
          <div className='main-modal-container'>
            <span className='x-span' onClick={() => this.setModalVisible(!this.state.modalVisible)}>&times;</span>

            <h1>{this.props.content.name}</h1>
            <div className='add-to-cart-text'>{this.state.added && (<span>Item Added To Cart!</span>)}</div>
            <img alt='product' src={this.props.content.description} style={{ width: "500px", height: '500px' }} />
            <div className='price-btn-container-modal'>
              <div>${this.props.content.price}.00</div>
              <button onClick={() => this.addToCart()}>Add To Cart</button>
            </div>
            <Auth capibility="update">
              <button className='editButton' onClick={() => this.editItem(this.props.content._id)}>Edit Product</button>
            </Auth>

            <Auth capibility="delete">
              <button className='deleteButton' onClick={() => this.deleteItem(this.props.content._id)}>Delete Product</button>
            </Auth>
          </div>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch, getState) => ({
  updateCart: (id, name, price, description) => dispatch(actions.updateCart(id, name, price, description)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
