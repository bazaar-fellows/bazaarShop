import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import TextField from '@material-ui/core/TextField';



const POST_MUTATION = gql`
mutation PostMutation($name: String!) {
  createCategory( name: $name ){
    _id
    name
  }
}
`



class CreateLink extends Component {
  state = {
    description: '',
    url: '',
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


    const { name } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <TextField
            style={styles.inputStyle}
            className="mb2"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            placeholder="Name"
          />
        </div>
        <Mutation mutation={POST_MUTATION} variables={{ name }}>
        {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
    </div>
    )
  }
}

export default CreateLink