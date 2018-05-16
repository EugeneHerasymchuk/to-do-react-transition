import React from 'react';
import PropTypes from 'prop-types';

import './Item.css';

const item = ({ name, onDelete }) => {
  return (
    <div className="item-section">
      <input
        type="checkbox"
        className="item-section__check"
        onClick={onDelete}
      />
      <span className="item-section__content"> {name} </span>
    </div>
  );
};

item.propTypes = {
  name: PropTypes.string,
  onDelete: PropTypes.func
};

export default item;
