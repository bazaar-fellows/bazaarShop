import React from 'react';
import {connect} from 'react-redux';
import '../components/design/background.scss'

class Background extends React.Component{
  render(){
    return(
        <div id="background" className={this.props.colorTheme}>       </div>
    )
  }
}

const mapStateToProps = state => ({
  colorTheme: state.data.colorTheme
});

export default connect(
  mapStateToProps,
)(Background);
