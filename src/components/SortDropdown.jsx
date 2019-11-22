import React from 'react';
import PropTypes from "prop-types";

const SortDropdown = ({direction, onChange}) => {
    return (
      <div className="dropdown">
          <select value={direction} onChange={onChange} className="dropdown-select">
              <option value={1}  className="dropdown-select-option">Kahanevalt</option>
              <option value={-1} className="dropdown-select-option">Kasvavalt</option>
          </select>
      </div>
    );
  }

SortDropdown.propTypes = {
  direction: PropTypes.oneOf([1, -1]).isRequired,
  onChange: PropTypes.func.isRequired
}

export default SortDropdown