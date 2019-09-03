import React, { Component } from 'react';

class Band extends Component {


  render() {
  	// console.log(this.props);
    return(
      <div>
      	<ul>
        <li>{this.props.name}
        <button key={this.props.id} onClick={() => this.props.deleteBand(this.props.id)}>Delete</button></li>
      	</ul>
      </div>
    );
  }
};

export default Band;
