import React from 'react';
import PropTypes from 'prop-types';

const item = ({ name, onDelete }) => {
  return (
    <div>
      <span> {name} </span>
      <button onClick={onDelete}>X</button>
    </div>
  );
};

item.propTypes = {
  name: PropTypes.string,
  onDelete: PropTypes.func
};

export default item;
