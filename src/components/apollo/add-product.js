import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import '../design/form.scss';
import TextField from '@material-ui/core/TextField';
import { FormHelperText } from '@material-ui/core';

const POST_MUTATION = gql`
mutation PostMutation($name: String!, $description: String!, $price: Float!, $qty: Int!, $category: String! ) {
  createProduct(input:{
    name: $name, description: $description, price: $price, qty: $qty, category: $category
  }
  ){
      name
      description
      price
      qty
      category{
          name
          _id
      }
  }
}
`

class CreateLink extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            description: '',
            price: 0,
            qty: 0,
            category: ''
        }
    }
 

  render() {
    const { name, description, price, qty } = this.state;

    const styles = {
      inputStyle: {
        display: 'flex',
        flexDirection: 'column',
        height: 40,
        marginLeft: 15,
        marginBottom: 30,
        color: '#333333',
        borderBottomWidth: 1,
        },
        divStyle: {
          borderColor: 'black',
          borderWidth: 1,
          borderStyle: 'solid'
        }
      };

    return (
      <div>
        <div className="productContainer" style={styles.divStyle}>
          <TextField
            style={styles.inputStyle}
            className="mb2"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            placeholder="Name"
          />
           <TextField
           style={styles.inputStyle}
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="Image Url"
          />
            <TextField
            style={styles.inputStyle}
            className="mb2"
            value={price}
            onChange={e => this.setState({ price: parseInt(e.target.value) })}
            type="number"  
            placeholder="Price"
          />   
            <TextField
            style={styles.inputStyle}
            className="mb2"
            value={qty}
            onChange={e => this.setState({ qty: parseInt(e.target.value) })}
            type="number" 
            placeholder="Quantity"
          />   
        </div>
        <Mutation mutation={POST_MUTATION} variables={{ name, description, price, qty, category: this.props.categoryId }}>
        {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
    </div>
    )
  }
}

export default CreateLink