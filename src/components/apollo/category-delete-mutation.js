import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import TextField from '@material-ui/core/TextField';


const POST_MUTATION = gql`
mutation DeleteMutation($_id: String!) {
    deleteCategory(_id: $_id){
        _id
        name
    }
}
`

class CreateDelete extends Component {
  state = {
    _id: '',
  }

  render() {

    const styles = {
      inputStyle: {
        alignSelf: 'stretch',
        height: 40,
        marginLeft: 15,
        marginBottom: 10,
        color: 'black',
        borderBottomWidth: 1,
        }
      };

    const { _id } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <TextField
            style={styles.inputStyle}
            className="mb2"
            value={_id}
            onChange={e => this.setState({ _id: e.target.value })}
            type="text"
            placeholder="Category ID"
          />
        </div>
        <Mutation mutation={POST_MUTATION} variables={{ _id }}>
        {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
    </div>
    )
  }
}

export default CreateDelete