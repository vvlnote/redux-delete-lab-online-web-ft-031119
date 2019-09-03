import React, { Component } from 'react';
import Band from './Band';
import { connect } from 'react-redux';

class Bands extends Component {
	render() {
  	console.log(this.props.bands);
  	let bands = this.props.bands.map((band, i) => {
  		return <Band key={i} id={band.id} name={band.name} deleteBand={this.props.deleteBand}/>
  		})
		return(
			<div>
			{bands}
			</div>
			)

	}

}

const mapStateToProps = ({ bands }) => ({ bands });

export default connect(mapStateToProps)(Bands);
