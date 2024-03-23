import React from 'react';
import PropTypes from 'prop-types';

function Wrapper({ children }) {
  return <div className="mx-72">{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
