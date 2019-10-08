import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class Checkbox extends Component {
  
  render() {
    return (
      <div>  
          <div>Käsitöölandid
              <input type="checkbox" value="Leechid"  onChange={this.props.handleCheckBox}/>
              <span></span>
          </div>
          
          <div>Roolandid
              <input type="checkbox" value="Roolandid" onChange={this.props.handleCheckBox}/>
              <span></span>
          </div>
      </div>
    );
  }
}
Checkbox.propTypes = {
    handleCheckBox: PropTypes.any.isRequired,
}
