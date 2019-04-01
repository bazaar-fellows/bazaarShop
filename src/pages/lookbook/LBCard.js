import React, { Component } from 'react'

import '../../components/design/lbDeck.scss'


export class LBCard extends Component {
  render() {
    return (
      <div>
        <img className='look-book-pic' src={this.props.content} alt="dog" />
      </div>
    )
  }
}

export default LBCard
