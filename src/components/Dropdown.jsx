import React from 'react';

const Dropdown = () => {
    return (
      <div className="dropdown">
          <select>
              <option value="highToLow">Kasvavalt</option>
              <option value="lowToHigh">Kahanevalt</option>
          </select>
      </div>
    );
  }

export default Dropdown
