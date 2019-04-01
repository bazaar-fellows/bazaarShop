import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import TextField from '@material-ui/core/TextField';


const POST_MUTATION = gql`
mutation DeleteMutation($_id: String!) {
    deleteProduct(_id: $_id){
        name
    }
}
`
 
class CreateDeleteProduct extends Component {
    constructor(props){
        super(props);
        this.state={
            _id: ''
        }

    }


    vertifyDelete= (name) =>{
        if(this.props.productName === name){
            this.setState({_id: this.props.productId})
        }
    }



  render() {

    const styles = {
      inputStyle: {
        alignSelf: 'stretch',
        height: 40,
        marginLeft: 15,
        marginBottom: 30,
        color: '#333333',
        borderBottomWidth: 1,
        }
      };
    console.log('props from delete', this.props)
    const { _id } = this.props.productId
    return (
      <div>
        <div className="flex flex-column mt3">

          <TextField
            style={styles.inputStyle}
            className="mb2"
            value={_id}
            onSubmit={e => this.vertifyDelete(e.target.value)}
            type="text"
            placeholder="Name"
          />
        </div>
        <Mutation mutation={POST_MUTATION} variables={{ _id: this.props.productId }}>
        {postMutation => <button onClick={postMutation}>Delete</button>}
        </Mutation>
    </div>
    )
  }
}

export default CreateDeleteProduct