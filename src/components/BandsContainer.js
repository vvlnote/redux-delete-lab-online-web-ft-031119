import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands';
import { connect } from 'react-redux';


class BandsContainer extends Component {
  render() {
  	//console.log(this.props.bands);
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands deleteBand={this.props.deleteBand}/>
      </div>
    )
  }
}



const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type: "DELETE_BAND", id })
})

export default connect(null, mapDispatchToProps)(BandsContainer)
