import React from 'react';
import PropTypes from 'prop-types';

function Selection({className, name, label, checked, onSelect, ...props}) {
  return (
    <div className={"" + (className ? (" " + className) : "")}>
      <input type="checkbox" name={name} onChange={onSelect} checked={checked}/>
      <span>{label}</span>
    </div>
  )
}

Selection.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

Selection.defaultProps = {
  className: ""
};

export default Selection;