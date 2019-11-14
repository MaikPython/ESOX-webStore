import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class Checkbox extends Component {
  
  render() {
    console.log("selected: ", this.props.selected)
     
    return (
      <div className="home-page-selection-selector" style={{display:"flex"}}> 
       
          <div>Käsitöölandid
              <input type="checkbox" value="Leechid" onClick={this.props.handleDefaultCheckBoxValue} onChange ={this.props.handleCheckBox} checked={this.props.selected}/>
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
    selected: PropTypes.bool.isRequired,
    handleDefaultCheckBoxValue: PropTypes.func.isRequired
}
