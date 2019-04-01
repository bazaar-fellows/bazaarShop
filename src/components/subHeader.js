import React from "react"
import '../components/design/index.scss'
import {connect} from 'react-redux';
import { Link } from "gatsby"

class SubHeader extends React.Component {
  render(){
    return(
      <h3 className={this.props.colorTheme}><Link to="/products">Shop Products</Link></h3>
    )
  }
}

const mapStateToProps = state => ({
  colorTheme: state.data.colorTheme
});

export default connect(
  mapStateToProps,
)(SubHeader);
